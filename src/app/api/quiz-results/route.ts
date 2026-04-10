import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const results = await prisma.quizResult.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const stats = await prisma.quizResult.aggregate({
    _avg: { percentage: true, score: true },
    _count: true,
    _max: { percentage: true, bestStreak: true },
  });

  return NextResponse.json({ results, stats });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { score, total, percentage, bestStreak, timeSpent } = body;

  const result = await prisma.quizResult.create({
    data: { score, total, percentage, bestStreak, timeSpent },
  });

  return NextResponse.json(result, { status: 201 });
}
