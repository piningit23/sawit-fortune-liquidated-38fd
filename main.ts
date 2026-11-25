// Fortune Cookie for the Liquidated Trader — entry program.
// Writes one fortune cookie line for a freshly liquidated crypto trader
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will soon meet a tall, dark stranger: your liquidation price, waiting patiently at your door.";

// Gate self-check: 1-160 characters, not whitespace-only, at most 20 words.
const len = [...FORTUNE].length;
const words = FORTUNE.trim().split(/\s+/).length;
if (len < 1 || len > 160 || FORTUNE.trim().length === 0 || words > 20) {
  throw new Error(`fortune fails gate: ${len} characters, ${words} words`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
