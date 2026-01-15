# Table of contents

## Framework

* [Spec Framework](framework/ARCHITECTURE-OVERVIEW.md)
* [SPEC-000: Framework Spec](framework/specs/SPEC-000-losthex-spec-framework.md)
* [Vocabulary](framework/vocabulary.md)

## Foundation ITDs

* [ITD-000: What is a Spec?](framework/itds/00-foundation/FOUNDATION-ITD-000-spec-definition.md)
* [ITD-001: Documentation Platform](framework/itds/00-foundation/FOUNDATION-ITD-001-documentation-platform.md)
* [ITD-002: Standalone ITDs](framework/itds/00-foundation/FOUNDATION-ITD-002-standalone-itds.md)
* [ITD-003: Data Structures](framework/itds/00-foundation/FOUNDATION-ITD-003-data-structures-first-class.md)

## Process ITDs

* [PROCESS-ITD-001: Review Standards](framework/itds/01-process/PROCESS-ITD-001-review-standards.md)

## Authoring ITDs

* [AUTHORING-ITD-001: AI-Assisted Documentation](framework/itds/02-authoring/AUTHORING-ITD-001-ai-assisted-documentation.md)
* [AUTHORING-ITD-002: Data Structure Organization](framework/itds/02-authoring/AUTHORING-ITD-002-data-structure-organization.md)

## Tooling ITDs

* [TOOLING-ITD-001: GitBook Sync](framework/itds/03-tooling/TOOLING-ITD-001-gitbook-sync.md)
* [TOOLING-ITD-002: Markdown Linting](framework/itds/03-tooling/TOOLING-ITD-002-markdown-linting.md)
* [TOOLING-ITD-003: Custom Lint Rules](framework/itds/03-tooling/TOOLING-ITD-003-custom-spec-rules.md)
* [TOOLING-ITD-004: AI Tooling](framework/itds/03-tooling/TOOLING-ITD-004-ai-tooling.md)
* [TOOLING-ITD-005: API Documentation](framework/itds/03-tooling/TOOLING-ITD-005-api-documentation.md)

## Core Data Structures

* [DS-000: Spec Structure](framework/core-data-structures/DS-000-spec-structure.md)
* [DS-001: ITD Structure](framework/core-data-structures/DS-001-itd-structure.md)
* [DS-002: Documentation Platform](framework/core-data-structures/DS-002-documentation-platform.md)
* [DS-003: Data Structure Schema](framework/core-data-structures/DS-003-data-structure-structure.md)

## API Reference

* [Overview](docs/api/README.md)
* ```yaml
  type: builtin:openapi
  props:
    models: true
    downloadLink: true
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: losthex-base-api
  ```

## Templates

* [Spec Template](docs/templates/spec-template.md)
* [ITD Template](docs/templates/itd-template.md)
* [Data Structure Template](docs/templates/data-structure-template.md)
