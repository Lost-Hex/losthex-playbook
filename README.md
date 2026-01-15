# LostHex Playbook

Template for client discovery repos. Each client gets their own repo + GitBook space.

**Click "Use this template"** to create a client-specific discovery repo.

## When You Clone for a Client

1. Rename repo to `[client]-discovery`
2. Update `TEARDOWN.md` with actual content
3. Save transcript to `inputs/sme-interview.md`
4. Clone client codebase to `inputs/codebase/` (gitignored)
5. Update `SUMMARY.md` — remove Framework section, keep only Overview + Teardown
6. Sync to client's GitBook space

## Structure

| File | Purpose |
|------|---------|
| `TEARDOWN.md` | System analysis template |
| `SCOPE.md` | Resource allocation + timeline template |
| `inputs/` | Transcript + codebase (codebase gitignored) |
| `framework/` | Internal reference (remove from nav for clients) |

## Linting

```bash
npm install
npm run lint:all
```
