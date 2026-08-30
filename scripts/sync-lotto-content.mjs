import { existsSync } from "node:fs";
import { mkdir, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const sourcePath = resolve(scriptDirectory, "../../src/features/content/articles.ts");
const outputPath = resolve(scriptDirectory, "../content/lotto-articles.json");

if (!existsSync(sourcePath)) {
  if (!existsSync(outputPath)) {
    throw new Error("Lotto article source and generated snapshot are both missing.");
  }
  console.log("Using the bundled Lotto article snapshot.");
} else {
  const sourceStat = await stat(sourcePath);
  const sourceUrl = `${pathToFileURL(sourcePath).href}?updated=${sourceStat.mtimeMs}`;
  const { ARTICLES } = await import(sourceUrl);

  if (!Array.isArray(ARTICLES) || ARTICLES.length === 0) {
    throw new Error("The Lotto article source did not export any articles.");
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(ARTICLES, null, 2)}\n`, "utf8");
  console.log(`Synced ${ARTICLES.length} Lotto articles to Wondly Stories.`);
}
