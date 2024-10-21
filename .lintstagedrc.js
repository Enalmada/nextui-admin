export default {
	"**/*.{js,jsx,ts,tsx,json,yaml,yml,md,css,scss}": () => "bun run lint",
	"ts,tsx,cjs,mjs": () => "bun --bun tsc --noEmit",
	// './package.json': ['fixpack'],
};
