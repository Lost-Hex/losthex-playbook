# LostHex Playbook

Pre-project documentation template. Teardowns, discovery, proposals—the stuff that happens before we clone `losthex-base`.

**Click "Use this template" to create a client-specific playbook repo.**

## What's Here

| Folder | Purpose |
|--------|---------|
| `teardowns/` | System analysis docs (understanding existing codebases) |
| `docs/templates/` | Templates for teardowns |

## Teardowns

A teardown is a structured analysis of an existing system. We write them when:

- Taking over a codebase from another team
- Evaluating a potential project
- Documenting a system we need to integrate with

### Create a Teardown

```bash
cp docs/templates/teardown-template.md teardowns/TEARDOWN-001-client-name.md
```

Then fill it out.

## GitBook

Each client playbook syncs to its own GitBook space:

1. Create a GitBook space for the client
2. Connect GitHub → sync this repo
3. Client reads polished docs without GitHub access

The `SUMMARY.md` controls navigation. Update it as you add teardowns.

## Linting

```bash
npm install
npm run lint:all
```
