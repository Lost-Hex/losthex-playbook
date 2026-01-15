# FOUNDATION-ITD-001: Documentation Platform

## CONTEXT

LostHex creates technical specifications for client engagements. These specs live in GitHub repos alongside code—version controlled, AI-readable, reviewed via PRs. But clients need to read and comment on specs without touching GitHub.

**Current State:** We evaluated several options for client-facing documentation—Google Docs, Notion, Confluence, and self-hosted solutions. Each had significant friction for syncing from GitHub.

**The Challenge:** We need a platform that:

- Allows clients to read and comment without GitHub access
- Syncs from GitHub (source of truth) with minimal friction
- Looks professional (we charge premium rates)
- Costs are reasonable for a small agency

## PROBLEM

What platform should we use for client-facing spec delivery?

## OPTIONS CONSIDERED

1. **Google Docs (manual export)**: Export markdown to Google Docs manually for each client review cycle
2. **Google Docs (automated sync)**: Build tooling to auto-sync from GitHub to Google Docs via API
3. **Notion**: Use Notion for client-facing specs with GitHub sync via API
4. ✅ **GitBook**: Host specs on GitBook with GitHub sync built-in
5. **Confluence**: Use Confluence (Bonterra's approach) with API sync
6. **Self-hosted (Docusaurus/VitePress)**: Deploy docs site per client with password protection

## REASONING

*Option 1 (Google Docs manual):* Free and familiar, but manual export is tedious. Formatting breaks. Version management is painful. Doesn't scale as project count grows.

*Option 2 (Google Docs automated):* API is complex. Requires significant engineering investment. Still has formatting limitations—markdown tables, code blocks, and mermaid diagrams don't render well.

*Option 3 (Notion):* Good UI, supports markdown. But API sync is half-baked, and Notion's block model doesn't map cleanly to markdown. Also adds per-seat cost.

*Option 4 (GitBook):* Native GitHub sync—push to repo, GitBook updates automatically. Professional look out of the box. Supports markdown, mermaid diagrams, and code blocks. Free tier covers small teams. Client access via share links (no login required) or private spaces.

*Option 5 (Confluence):* Bonterra's approach works but requires complex Pandoc + Lua + Python tooling. Overkill for a small agency. Also Confluence UI feels enterprise/bloated.

*Option 6 (Self-hosted):* Full control, but DevOps overhead for each client. Password protection adds friction. Not worth the maintenance burden.

**Why GitBook:** Zero-friction GitHub sync, professional appearance, free tier, client access without accounts. The sync "just works"—we push to main, GitBook updates within minutes. This lets us focus on writing good specs instead of building sync tooling.

## IMPLICATIONS

- Specs sync automatically from GitHub to GitBook on merge to main
- Clients access specs via GitBook share links (no account required)
- Comments happen in GitBook; we address feedback via GitHub PRs
- GitBook becomes the client-facing "published" version
- GitHub remains source of truth for authoring and review
- May need to revisit if we outgrow free tier or need advanced features
