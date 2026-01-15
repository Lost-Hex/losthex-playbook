import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

// Extend Zod with OpenAPI methods (.openapi())
// This must be called before any schemas are defined
extendZodWithOpenApi(z);

// Re-export extended z for use in schemas
export { z };

// Global registry for all API schemas
export const registry = new OpenAPIRegistry();

// Generate OpenAPI document
export function generateOpenAPIDocument() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "LostHex Base API",
      version: "1.0.0",
      description: "API documentation for LostHex Base starter template",
    },
    servers: [
      {
        url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
        description: "API Server",
      },
    ],
  });
}
