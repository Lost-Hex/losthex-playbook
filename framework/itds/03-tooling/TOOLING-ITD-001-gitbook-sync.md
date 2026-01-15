# TOOLING-ITD-001: GitBook Sync

## CONTEXT

Clients need to review specs without GitHub access. Engineers need a fast authoring workflow. We need a solution that separates authoring (technical) from delivery (client-facing).

## PROBLEM

How should we deliver documentation to clients?

## OPTIONS CONSIDERED

1. **PDF exports** - Generate PDFs from markdown, email to clients
2. **Notion** - Mirror docs to Notion for client access
3. ✅ **GitBook with GitHub sync** - Auto-sync from GitHub repo to GitBook

## REASONING

*Option 1 (PDF):* Manual process. Stale the moment you export. No collaboration.

*Option 2 (Notion):* Good UX but requires manual sync or custom tooling. API access needed for automation.

*Option 3 (GitBook):* Native GitHub integration. Push to main, GitBook updates automatically. Clients get polished UI. We keep GitHub workflow.

## IMPLICATIONS

- GitBook syncs from GitHub on every push to main
- `.gitbook.yaml` controls what gets published
- `SUMMARY.md` defines navigation structure
- Client feedback flows back via email/Slack → new PRs
- No manual publishing step
