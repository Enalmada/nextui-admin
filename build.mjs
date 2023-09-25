
await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    target: 'browser',
    external: ['@nextui-org/react', 'clsx', 'framer-motion', 'next', 'next-themes', 'react'],
    root: './src',
});
