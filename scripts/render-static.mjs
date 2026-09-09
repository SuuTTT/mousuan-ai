import { chmod, cp, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const outputRoot = path.resolve(projectRoot, process.argv[2] ?? ".release/site");
const rootPath = path.parse(outputRoot).root;

if (outputRoot === projectRoot || outputRoot === rootPath || !outputRoot.startsWith(`${projectRoot}${path.sep}`)) {
  throw new Error("The static output directory must be a child of the project directory.");
}

const routes = [
  "/",
  "/activities",
  "/applications/bioinformatics",
  "/applications/embodied-intelligence",
  "/applications/network-security",
  "/applications/strategic-learning",
  "/applications/structured-ai",
  "/applications/structured-decision-making",
  "/books",
  "/concepts/physical-world",
  "/concepts/information-world",
  "/concepts/information-system",
  "/concepts/complete-knowledge",
  "/concepts/scientific-paradigm",
  "/concepts/structural-information",
  "/concepts/decoding-principles",
  "/concepts/intelligence-thesis",
  "/concepts/mousuan-strategy",
  "/concepts/scientific-principles",
  "/concepts/engineering-principles",
  "/framework",
  "/logo-options",
  "/modules/principles",
  "/modules/applications",
  "/modules/sun-tzu",
  "/modules/knowledge",
  "/modules/mousuan-mi",
  "/principles/ai-principles",
  "/principles/information-mathematics",
  "/principles/strategic-intelligence",
  "/principles/structural-information",
  "/team",
  "/theorems",
  "/themes/information",
  "/themes/intelligence-thesis",
  "/themes/strategy-principle",
  "/themes/zhi-neng-definition",
  "/themes/sun-tzu-model",
  "/wiki/terminology",
];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist/client"), outputRoot, { recursive: true });
for (const privatePath of ["audit", "audit-redesign", "internal-audit"]) {
  await rm(path.join(outputRoot, privatePath), { recursive: true, force: true });
}

const workerUrl = pathToFileURL(path.join(projectRoot, "dist/server/index.js"));
workerUrl.searchParams.set("static-render", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) throw new Error(`${route} rendered with HTTP ${response.status}`);

  const routeDir = route === "/" ? outputRoot : path.join(outputRoot, route.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), await response.text());
}

async function normalisePublicPermissions(directory) {
  await chmod(directory, 0o755);
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await normalisePublicPermissions(entryPath);
    else if (entry.isFile()) await chmod(entryPath, 0o644);
  }
}

await normalisePublicPermissions(outputRoot);

for (const pdfName of ["artificial-intelligence-science.pdf", "sun-tzu-ai-principles.pdf"]) {
  const pdf = await stat(path.join(outputRoot, pdfName));
  if (!pdf.isFile() || (pdf.mode & 0o004) === 0) {
    throw new Error(`${pdfName} is missing or unreadable by the web server.`);
  }
}

console.log(`Rendered ${routes.length} public routes to ${path.relative(projectRoot, outputRoot)}`);
