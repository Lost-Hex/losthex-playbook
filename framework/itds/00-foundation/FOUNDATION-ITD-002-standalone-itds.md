# FOUNDATION-ITD-002: ITDs and Data Structures as Standalone Documents

## CONTEXT

In previous documentation approaches, decision documentation was often embedded within larger spec documents. Each spec contained its own decision sections that documented choices made for that project.

With AI-assisted development and repo-based documentation, standalone files work better—easier to create, reference, reuse, and generate with AI tools. Shorter, focused documents work better with AI; since we want ITDs to be highly structured and consistent, AI can write and generate better given focused examples.

With [FOUNDATION-ITD-000](FOUNDATION-ITD-000-spec-definition.md), we established that projects need Specs to provide narrative. This ITD determines the relationship between Specs and ITDs/data structures.

## PROBLEM

Should Specs embed ITDs and data structures, or should they exist as standalone documents?

## OPTIONS CONSIDERED

1. Embedded in Specs: ITDs and data structures are sections within Spec documents
2. ✅ **Standalone documents**: ITDs and data structures are separate files that Specs reference

## REASONING

*Option 1 (Embedded):* All project context in one place—no broken links, no separate files to maintain. However, teams can't reuse ITDs across projects. Cross-cutting decisions (auth patterns, API versioning, infrastructure choices) don't belong to a single Spec. Harder to discover decisions across the organization. Large documents are harder for AI to process effectively.

*Option 2 (Standalone):* Fits naturally with repo-based documentation—the file tree becomes the table of contents. Shorter, focused documents work better with AI tools. Cross-cutting decisions exist independently and multiple Specs can reference them. However, requires linking discipline—Specs must reference relevant ITDs. This splits context across files.

**Why standalone works:** The file system provides natural organization. AI tools excel at generating focused documents from templates. Part-time team members can quickly find and understand specific decisions without reading entire specs. Cross-project reuse becomes possible.

[FOUNDATION-ITD-003](FOUNDATION-ITD-003-data-structures-first-class.md) addresses data structures as first-class documents separately.

## IMPLICATIONS

- ITDs are standalone markdown files in `/docs/itds/` organized by category
- Data structures are standalone markdown files in `/docs/core-data-structures/`
- Specs reference relevant ITDs and data structures via links
- ITDs can exist without a Spec (cross-cutting architectural decisions)
- Engineers can create ITDs for any important technical decision, not just project-related ones
- **Superseded ITDs:** When a new ITD supersedes an old one, add a note at the top linking to the replacement; keep the old ITD for historical reference
