# TOOLING-ITD-003: Custom Lint Rules

## CONTEXT

Generic markdown linting doesn't understand our document types. An ITD must have specific sections (Context, Problem, Options, Reasoning, Implications). A Data Structure needs an Overview.

## PROBLEM

How should we enforce document-type-specific structure?

## OPTIONS CONSIDERED

1. **Manual review only** - Reviewers check structure
2. ✅ **Custom markdownlint rules** - Automated validation per doc type
3. **Schema validation** - YAML frontmatter with JSON schema

## REASONING

*Option 1 (Manual):* Reviewers forget. Inconsistent enforcement.

*Option 2 (Custom rules):* Markdownlint supports custom rules in JavaScript. We can validate ITD sections, naming conventions, and required content automatically.

*Option 3 (Schema):* Adds complexity. Frontmatter is friction. Markdown-native validation is simpler.

## IMPLICATIONS

Custom rules implemented:

- `itd-required-sections` - ITDs must have all five sections
- `itd-valid-sections` - No unexpected sections in ITDs
- `itd-single-selected-option` - Exactly one option marked with ✅
- `itd-naming-convention` - Title matches folder prefix
- `ds-required-sections` - Data Structures need Overview

Rules live in `tooling/lint-rules/` and run via markdownlint config.
