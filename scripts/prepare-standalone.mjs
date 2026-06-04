/**
 * After `next build` with `output: "standalone"`, copy traced assets the server expects.
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");
const staticSrc = join(root, ".next", "static");
const staticDest = join(standalone, ".next", "static");
const publicSrc = join(root, "public");
const publicDest = join(standalone, "public");

if (!existsSync(standalone)) {
  console.error(
    'Missing .next/standalone — run `next build` with output: "standalone".'
  );
  process.exit(1);
}
if (!existsSync(staticSrc)) {
  console.error("Missing .next/static — build may have failed.");
  process.exit(1);
}

mkdirSync(join(standalone, ".next"), { recursive: true });
cpSync(staticSrc, staticDest, { recursive: true });
console.log("Copied .next/static → .next/standalone/.next/static");

if (existsSync(publicSrc)) {
  cpSync(publicSrc, publicDest, { recursive: true });
  console.log("Copied public → .next/standalone/public");
}

console.log("Standalone bundle ready. Start with: node server.js (from .next/standalone)");
