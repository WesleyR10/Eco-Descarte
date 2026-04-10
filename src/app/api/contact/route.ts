import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, type } = body;

  if (!name || !message) {
    return NextResponse.json(
      { error: "Nome e mensagem são obrigatórios" },
      { status: 400 }
    );
  }

  const contact = await prisma.contactMessage.create({
    data: { name, email, message, type: type || "feedback" },
  });

  return NextResponse.json(contact, { status: 201 });
}

export async function GET() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(messages);
}
