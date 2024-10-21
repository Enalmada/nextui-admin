import {
	bunBuild,
	getSourceFiles,
	prependDirectiveToBuiltFiles,
	removeBadClientStringFromFiles,
} from "@enalmada/bun-externals";

async function buildWithExternals(): Promise<void> {
	const entrypoints = await getSourceFiles();

	await bunBuild({
		entrypoints,
		outdir: "./dist",
		target: "node",
		external: ["*"],
		root: "./src",
	});

	// Update the built files in './dist/client' after the build completes.
	prependDirectiveToBuiltFiles("./src", "./dist");
	removeBadClientStringFromFiles("./dist");
}

void buildWithExternals();
