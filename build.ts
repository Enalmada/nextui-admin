/// <reference types="bun-types" />

import getExternalDependencies, { bunBuild } from '@enalmada/bun-externals';

import {
  prependDirectiveToBuiltFiles,
  removeBadClientStringFromFiles,
} from './prependClientDirective';

async function buildWithExternals(): Promise<void> {
  const externalDeps = await getExternalDependencies();

  await bunBuild({
    entrypoints: [
      './src/index.ts',
      './src/layout/layout.tsx',
      './src/navbar/user-dropdown.tsx',
      './src/sidebar/sidebar.tsx',
    ],
    outdir: './dist',
    target: 'node',
    external: [
      ...externalDeps,
      './src/layout/layout',
      './src/navbar/user-dropdown',
      './src/sidebar/sidebar',
    ],
    root: './src',
  });

  // Update the built files in './dist/client' after the build completes.
  prependDirectiveToBuiltFiles('./src', './dist');
  removeBadClientStringFromFiles('./dist');
}

void buildWithExternals();
