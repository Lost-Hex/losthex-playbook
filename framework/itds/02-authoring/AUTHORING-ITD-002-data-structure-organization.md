# AUTHORING-ITD-002: Data Structure Organization

## CONTEXT

Data structures document the entities in a system. A single project might have dozens of entities (User, Order, Product, etc.). We need a principle for organizing these into documents.

## PROBLEM

How should we organize data structure documents—one entity per doc, or grouped?

## OPTIONS CONSIDERED

1. **One entity per document** - Every entity gets its own DS-XXX file
2. ✅ **Group by aggregate root** - Parent entity + children in one document
3. **Group by domain** - All entities in a bounded context together

## REASONING

*Option 1 (One per doc):* Too granular. An Order without its LineItems is meaningless. Creates excessive cross-references.

*Option 2 (Aggregate root):* DDD principle—the aggregate root is the consistency boundary. Order + LineItems + Shipment belong together. Keeps related entities in context.

*Option 3 (By domain):* Too coarse. A "Commerce" domain might have 50 entities. Unwieldy.

## IMPLICATIONS

- Identify aggregate roots first, then document
- Child entities live in the parent's document
- Document cross-aggregate relationships via references
- Example: `DS-001-order.md` contains Order, LineItem, Shipment
