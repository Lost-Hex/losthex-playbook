# LostHex Playbook

Pre-project documentation—teardowns, discovery, proposals.

**Click "Use this template" to create a client-specific playbook.**

## Quick Start

```bash
# Create teardown folder
mkdir -p teardowns/TEARDOWN-001-acme/inputs
cp teardown-template.md teardowns/TEARDOWN-001-acme/TEARDOWN-001-acme.md

# Clone client codebase (gitignored)
git clone <client-repo> teardowns/TEARDOWN-001-acme/inputs/codebase

# Lint
npm install
npm run lint:all
```

Cursor can read the full codebase in `inputs/codebase/` during analysis.

## Structure

| File | Purpose |
|------|---------|
| [SPEC-000](framework/SPEC-000-teardowns.md) | What teardowns are, why we write them |
| [Template](teardown-template.md) | Copy this to start a teardown |
| `teardowns/` | Your teardowns go here |

## GitBook

Each client playbook syncs to its own GitBook space. Clients read polished docs without GitHub access.
