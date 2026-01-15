# LostHex Playbook

Pre-project documentation—teardowns, discovery, proposals.

**Click "Use this template" to create a client-specific playbook.**

## Quick Start

```bash
# Create teardown
cp teardown-template.md teardowns/TEARDOWN-001-client-name.md

# Lint
npm install
npm run lint:all
```

## Structure

| File | Purpose |
|------|---------|
| [SPEC-000](framework/SPEC-000-teardowns.md) | What teardowns are, why we write them |
| [Template](teardown-template.md) | Copy this to start a teardown |
| `teardowns/` | Your teardowns go here |

## GitBook

Each client playbook syncs to its own GitBook space. Clients read polished docs without GitHub access.
