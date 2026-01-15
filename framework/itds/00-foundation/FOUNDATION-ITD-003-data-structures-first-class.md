# FOUNDATION-ITD-003: Data Structures as First-Class Documents

## CONTEXT

Technical documentation typically focuses on decisions, processes, and architecture. Data models—the entities, relationships, and schemas that define what a system stores and manipulates—are often treated as implementation details buried in code or database schemas.

Data structures aren't limited to database entities. They include:

- Database entities and relationships (relational or NoSQL)
- Document schemas (like the Spec and ITD structures in this framework)
- File formats and configurations
- API payloads and contracts
- Any structured data that defines what a system works with

We need to decide how data structures fit into the documentation framework.

## PROBLEM

Should data structures be first-class documents alongside ITDs, or are they secondary artifacts?

## OPTIONS CONSIDERED

1. Secondary artifacts: Data structures documented within ITDs or Specs, not standalone
2. ✅ **First-class documents**: Data structures as standalone docs with equal standing to ITDs

## REASONING

*Option 1 (Secondary):* Fewer doc types to manage. Data models stay close to the decisions that created them. But data models transcend individual decisions—a User entity serves auth, profile, billing, and dozens of features. Embedding it in one ITD or Spec makes it hard to find and impossible to share across projects.

*Option 2 (First-class):* The data model IS the system. If you understand the entities, their relationships, and how they're created/queried, you understand what the system does—often without reading code. Data structures exist independently because:

- **The data model is the heart of any system** — understand the entities, understand the system
- **Data models transcend projects** — a User entity serves many features, many specs
- **Shared across teams** — multiple projects reference the same entities
- **Design artifacts worth documenting** — getting the model right is often harder than the code
- **AI and humans can reason about systems** by reading data structures without diving into code
- **Client understanding** — ER diagrams help non-technical stakeholders understand what the system manages

## IMPLICATIONS

1. Data structures have their own directory: `/docs/core-data-structures/`
2. Data structures follow a dedicated template (DS template)
3. Specs reference data structures via links, same as ITDs
4. Data structures can exist without a Spec (foundational entities)
5. Cross-project data models documented once, referenced everywhere
6. ER diagrams with mermaid notation for visual clarity
