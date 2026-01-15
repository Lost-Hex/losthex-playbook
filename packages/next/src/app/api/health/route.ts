import { NextResponse } from "next/server";
import { HealthResponseSchema } from "@/lib/api/schemas/health";

export async function GET() {
  const response = {
    status: "healthy" as const,
    timestamp: new Date().toISOString(),
    service: "losthex-base",
  };

  // Validate response matches schema (catches drift at runtime)
  const validated = HealthResponseSchema.parse(response);

  return NextResponse.json(validated);
}
