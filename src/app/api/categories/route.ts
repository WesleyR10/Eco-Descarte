import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.wasteCategory.findMany({
    include: {
      examples: true,
      discardSteps: { orderBy: { step: "asc" } },
      dangers: true,
    },
    orderBy: { order: "asc" },
  });
  return NextResponse.json(categories);
}
