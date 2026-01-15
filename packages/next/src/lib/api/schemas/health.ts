import { z, registry } from "../openapi";

// Response schema
export const HealthResponseSchema = z
  .object({
    status: z.enum(["healthy", "degraded", "unhealthy"]),
    timestamp: z.string().datetime(),
    service: z.string(),
  })
  .openapi("HealthResponse");

// Register the endpoint
registry.registerPath({
  method: "get",
  path: "/api/health",
  tags: ["Endpoints"],
  summary: "Health check",
  description: "Returns the current health status of the service",
  responses: {
    200: {
      description: "Service is healthy",
      content: {
        "application/json": {
          schema: HealthResponseSchema,
        },
      },
    },
  },
});
