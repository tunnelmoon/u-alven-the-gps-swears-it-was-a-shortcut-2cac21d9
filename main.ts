// The GPS Swears It Was a Shortcut
// make.fun bounty entry: the GPS's own excuse for sending the driver
// down the wrong road, in its own voice. One line, at most 200 chars.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I sent you down that cul-de-sac because the map promised a shortcut. We have both been lied to.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1 to ${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
validate(ENTRY);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Round-trip check: what we wrote must read back byte for byte.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("round-trip mismatch: entry.txt does not match ENTRY");
}
console.log(`wrote ${outPath} (${ENTRY.length} chars)`);
