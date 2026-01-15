# API Reference

The LostHex Base API documentation uses Zod schemas as the single source of truth for validation and documentation.

## How It Works

1. Define API schemas with Zod in `packages/next/src/lib/api/schemas/`
2. CI generates `openapi.json` on every push to `main`
3. GitBook CLI publishes the spec automatically
4. GitBook renders interactive API documentation

## OpenAPI Specification

The raw OpenAPI spec lives at `docs/api/openapi.json`. You can import it into:

- Postman
- Insomnia
- Any OpenAPI-compatible tool

## Adding New Endpoints

**Step 1:** Create a schema file in `packages/next/src/lib/api/schemas/`:

```typescript
import { z, registry } from "../openapi";

export const MyResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
}).openapi("MyResponse");

registry.registerPath({
  method: "get",
  path: "/api/my-endpoint",
  tags: ["MyTag"],
  summary: "Brief description",
  description: "Detailed description",
  responses: {
    200: {
      description: "Success response",
      content: {
        "application/json": {
          schema: MyResponseSchema,
        },
      },
    },
  },
});
```

**Step 2:** Import your schema in `schemas/index.ts`:

```typescript
import "./my-endpoint";
```

**Step 3:** Regenerate the spec locally (optional, CI does this automatically):

```bash
cd packages/next
npm run generate:openapi
```

## Schema Validation

The same Zod schemas used for documentation also validate responses at runtime. This ensures documentation never drifts from actual API behavior.

```typescript
// In your route handler
import { MyResponseSchema } from "@/lib/api/schemas/my-endpoint";

export async function GET() {
  const data = await fetchData();
  
  // Validates response matches schema
  const validated = MyResponseSchema.parse(data);
  
  return NextResponse.json(validated);
}
```

## CI/CD Integration

On push to `main`:

1. `npm run generate:openapi` creates `docs/api/openapi.json`
2. GitBook CLI publishes to GitBook organization
3. GitBook renders the interactive API reference

Required secret:

- `GITBOOK_TOKEN` - API token from GitBook settings
