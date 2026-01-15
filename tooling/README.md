# Tooling

This directory contains quality tooling for the LostHex spec framework.

## Lint Rules

Custom markdownlint rules for ITD and Data Structure validation:

| Rule | Description |
|------|-------------|
| `itd-single-selected-option.js` | Ensures exactly one option in OPTIONS section is marked with ✅ and bold |
| `itd-required-sections.js` | Ensures ITDs have all required sections (Context, Problem, Options, Reasoning, Implications) |
| `itd-valid-sections.js` | Ensures ITDs only contain valid section headings |
| `itd-naming-convention.js` | Validates ITD title matches parent directory (e.g., FOUNDATION-ITD-001) |
| `ds-required-sections.js` | Ensures Data Structure docs have required sections |

## Vale (Prose Linting)

Vale checks prose quality:

- **Microsoft.Passive** - Flags passive voice
- **Microsoft.Wordiness** - Flags wordy phrases

Vocabulary in `vale-styles/config/vocabularies/LostHex/accept.txt` contains accepted technical terms.

## Usage

```bash
# Lint markdown (structure + custom rules)
npm run lint:markdown

# Lint prose (Vale)
npm run lint:prose

# Lint all
npm run lint:all

# Auto-fix markdown issues
npm run lint:markdown:fix
```

## Installing Vale

Vale needs to be installed separately:

```bash
# macOS
brew install vale

# or download from https://vale.sh/docs/vale-cli/installation/
```

Then sync the Microsoft style package:

```bash
vale sync
```
