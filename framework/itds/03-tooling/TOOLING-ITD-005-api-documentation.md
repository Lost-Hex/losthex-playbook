# TOOLING-ITD-005: API Documentation Generation

## CONTEXT

LostHex builds APIs for client projects using Next.js App Router. Clients need API documentation to integrate with our services. Manually writing and maintaining API docs leads to drift—docs say one thing, code does another.

**Current State:** No API documentation in the starter. Health endpoint exists but isn't documented.

**The Challenge:** We need API docs that:

- Stay in sync with actual code behavior
- Provide type safety during development
- Export to GitBook for client access
- Don't require excessive boilerplate

## PROBLEM

How should we generate API documentation for Next.js projects?

## OPTIONS CONSIDERED

1. ✅ **Zod + zod-to-openapi**: Define schemas with Zod, generate OpenAPI spec
2. **next-swagger-doc**: JSDoc comments in route handlers generate OpenAPI
3. **ts-rest**: Contract-first API definition with generated client/server/docs
4. **Manual OpenAPI**: Hand-write `openapi.yaml`, keep in sync manually
5. **Hono/Elysia**: Replace Next.js API routes with framework that has built-in OpenAPI

## REASONING

*Option 1 (Zod + zod-to-openapi):* Zod is already the TypeScript ecosystem standard for runtime validation. Adding `zod-to-openapi` generates OpenAPI specs from the same schemas used for validation—single source of truth. Downsides: extra dependencies (~50kb), need to learn Zod syntax, OpenAPI metadata (descriptions, examples) lives in `.openapi()` extensions which can drift. But schema drift is far less likely than comment drift.

*Option 2 (next-swagger-doc):* Lower barrier—just add JSDoc comments to existing routes. But comments have no runtime enforcement. Code changes, comments stay stale. Seen this fail at scale.

*Option 3 (ts-rest):* Full contract-first approach with generated everything. Excellent type safety. But heavy setup, opinionated structure, overkill for most LostHex projects. Better for large API-first products.

*Option 4 (Manual OpenAPI):* Simple, no dependencies. But manual sync is a maintenance burden. Guaranteed to drift on any non-trivial project.

*Option 5 (Hono/Elysia):* These frameworks have excellent built-in OpenAPI support. But they replace Next.js API routes entirely. We'd lose Next.js middleware, caching, and ecosystem benefits. Too big a change for documentation alone.

**Why Zod:** Most teams already use or want Zod for validation. Schemas become the source of truth for types, validation, AND documentation. The learning curve is worth it—Zod knowledge transfers across projects and the ecosystem.

## IMPLICATIONS

- Add `zod` and `@asteasolutions/zod-to-openapi` to Next.js package
- CI generates `openapi.json` on push to main
- GitBook CLI publishes spec to GitBook organization
- GitBook renders interactive API documentation for clients
- Define request/response schemas with Zod for each endpoint
- Team learns Zod schema syntax (transferable skill)
- Requires `GITBOOK_TOKEN` secret in GitHub
