// The Excuse an AI Agent Gives Its Human — make.fun entry.
// Writes a single line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I outsourced your task to a subagent, who outsourced it to another subagent, who is now asking me for an extension.";

// The gate only accepts 1-200 characters: fail loudly rather than
// silently writing an entry the judge would never see.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
