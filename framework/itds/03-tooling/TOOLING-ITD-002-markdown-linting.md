# TOOLING-ITD-002: Markdown Linting

## CONTEXT

Documentation quality degrades over time without enforcement. Formatting inconsistencies, broken links, and structural issues accumulate.

## PROBLEM

How should we enforce documentation structure and quality automatically?

## OPTIONS CONSIDERED

1. **No automation** - Rely on reviewer diligence
2. ✅ **Markdownlint + Vale** - Structure validation + prose linting
3. **Custom tooling** - Build proprietary validation

## REASONING

*Option 1 (No automation):* Reviewers miss things. Inconsistencies accumulate.

*Option 2 (Markdownlint + Vale):* Industry-standard tools. Markdownlint catches structural issues (headings, lists, code blocks). Vale catches prose issues (passive voice, wordiness). Both are configurable and run in CI.

*Option 3 (Custom tooling):* Maintenance burden. Reinventing solved problems.

## IMPLICATIONS

- `markdownlint` enforces markdown structure
- `vale` enforces prose quality (Microsoft style guide base)
- Custom rules extend markdownlint for ITD/DS validation
- CI fails on lint errors—no merge until fixed
- Pre-push hook catches issues locally
