import path from 'path';

const tsc = () => `bun --bun tsc --noEmit`;

const ignoredFiles = [
    'dist/**/*'
];

const eslintPattern = `!(${ignoredFiles.join(',')})*.{ts,tsx,cjs,mjs}`;

const buildEslintCommand = (filenames) =>
    `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

export default {
    [eslintPattern]: [buildEslintCommand, tsc],
    './package.json': ['fixpack'],
};