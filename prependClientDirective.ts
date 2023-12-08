import fs from 'fs';
import path from 'path';

const clientDirectiveRegex = /^\s*["']use client["'];/m;

function findFilesWithDirective(directory: string) {
  let results: string[] = [];

  const items = fs.readdirSync(directory);

  items.forEach((item) => {
    const itemPath = path.join(directory, item);
    const stat = fs.statSync(itemPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(findFilesWithDirective(itemPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      const content = fs.readFileSync(itemPath, 'utf-8');
      if (clientDirectiveRegex.test(content)) {
        results.push(itemPath);
      }
    }
  });

  return results;
}

function prependDirectiveToBuiltFiles(srcDirectory: string, buildDirectory: string) {
  const files = findFilesWithDirective(srcDirectory);

  files.forEach((file) => {
    const relativePath = path.relative(srcDirectory, file);
    const distPath = path.join(buildDirectory, relativePath).replace(/\.tsx?$/, '.js');

    if (fs.existsSync(distPath)) {
      const content = fs.readFileSync(distPath, 'utf-8');
      const updatedContent = `'use client';\n\n${content}`;
      fs.writeFileSync(distPath, updatedContent);
      // eslint-disable-next-line no-console
      console.log(`Prepended 'use client' directive to ${distPath}`);
    }
  });
}

// Work around a bun bug with use client
function removeBadClientStringFromFiles(dir: string) {
  const targetString = '"use client";';

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      removeBadClientStringFromFiles(filePath); // Recursive call for directories
    } else {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(targetString)) {
        content = content.replace(new RegExp(targetString, 'g'), '');
        fs.writeFileSync(filePath, content, 'utf8');
        // eslint-disable-next-line no-console
        console.log(`Removed bad string from ${filePath}`);
      }
    }
  });
}

export { prependDirectiveToBuiltFiles, removeBadClientStringFromFiles };
