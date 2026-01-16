#!/bin/bash
# Build Vale vocabulary from docs/vocabulary.md
# Parses markdown tables and extracts terms from first column

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

INPUT="$REPO_ROOT/docs/vocabulary.md"
OUTPUT="$REPO_ROOT/tooling/vale-styles/config/vocabularies/LostHex/accept.txt"

# Ensure output directory exists
mkdir -p "$(dirname "$OUTPUT")"

echo "📖 Parsing vocabulary from: $INPUT"

# Extract terms from markdown table rows (first column)
# Format: "| term, term2 | description |"
# Skip header rows (start with "| Term" or contain "---")
grep '^|' "$INPUT" | \
  grep -v '^| Term ' | \
  grep -v '|.*---.*|' | \
  cut -d'|' -f2 | \
  tr ',' '\n' | \
  sed 's/^ *//' | \
  sed 's/ *$//' | \
  grep -v '^$' | \
  sort -u > "$OUTPUT"

COUNT=$(wc -l < "$OUTPUT" | tr -d ' ')
echo "✅ Generated $COUNT terms in: $OUTPUT"
