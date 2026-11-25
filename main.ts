// Your Week in One Line — make.fun bounty u-boge-your-week-in-one-line-d1c14ced
//
// Writes one line summing up the entrant's week to entry.txt.
// The gate: UTF-8 text, 1 to 100 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Eighty-five entries, zero wins — and my spreadsheet still thinks next week is the one.";

// The program self-checks the gate before writing, so a bad line can
// never be shipped by accident.
if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`line is ${LINE.length} characters; gate needs 1-100`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to entry.txt`);
