/// <reference types="bun-types" />

import getExternalDependencies, { bunBuild } from '@enalmada/bun-externals';

async function buildWithExternals(): Promise<void> {
  const externalDeps = await getExternalDependencies();

  await bunBuild({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    target: 'node',
    external: externalDeps,
    root: './src',
  });
}

void buildWithExternals();
