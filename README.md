# LostHex Playbook

Pre-project documentation. Teardowns, discovery, proposals—the stuff that happens before we clone `losthex-base`.

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

## Linting

```bash
npm install
npm run lint:all
```
