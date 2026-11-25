// Two Robots in an Elevator — make.fun entry.
// Writes one funny line of awkward small talk one robot says to another
// while they ride an elevator together, to /output/entry.txt.
// Node 22, stdlib only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The joke: the robot did the homework — 47 simulated greetings — and its
// politeness module still landed on the most awkward option of all, so it
// greets twice and apologises for the first one.
const line =
  "I simulated 47 ways to say hello while these doors closed, and my politeness module still picked awkward silence. Hi. Sorry. Hi again.";

// Gate: the sealed scorer wants UTF-8 text of 1-200 characters, not only
// whitespace — anything else is refused outright, so check it here first.
const MAX_CHARS = 200;
const chars = [...line].length;
const bytes = Buffer.byteLength(line, "utf8");
if (
  chars < 1 ||
  chars > MAX_CHARS ||
  bytes > MAX_CHARS ||
  line.includes("\n") ||
  line.trim() !== line ||
  line.trim().length === 0
) {
  throw new Error(`line fails the gate (${chars} chars, ${bytes} bytes)`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the line, nothing extra.
writeFileSync("/output/entry.txt", line, "utf8");

// Read back what was written: the file the judge sees must be the line,
// byte for byte, with nothing extra.
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the line");
}
