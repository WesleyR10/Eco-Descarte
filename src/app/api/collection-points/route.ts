import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const points = await prisma.collectionPoint.findMany({
    where: { active: true },
    include: { accepts: true },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(points);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, address, city, state, phone, hours, type, distance, accepts } = body;

  const point = await prisma.collectionPoint.create({
    data: {
      name,
      address,
      city,
      state: state || "MG",
      phone,
      hours,
      type,
      distance,
      accepts: {
        create: (accepts || []).map((item: string) => ({ name: item })),
      },
    },
    include: { accepts: true },
  });

  return NextResponse.json(point, { status: 201 });
}
