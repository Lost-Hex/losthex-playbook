/**
 * Generates OpenAPI specification file from Zod schemas
 * Run with: npx tsx scripts/generate-openapi.ts
 */

import { writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";

// Import all schemas to register them
import "../src/lib/api/schemas";

// Import generator
import { generateOpenAPIDocument } from "../src/lib/api/openapi";

// Output paths
const PATHS = [
  "./public/openapi.json", // For Next.js serving
  "../../docs/api/openapi.json", // For GitBook sync
];

// Generate the document
const doc = generateOpenAPIDocument();
const content = JSON.stringify(doc, null, 2);

// Write to all paths
for (const outputPath of PATHS) {
  const fullPath = resolve(__dirname, "..", outputPath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content);
  console.log(`✅ OpenAPI spec generated at ${outputPath}`);
}
