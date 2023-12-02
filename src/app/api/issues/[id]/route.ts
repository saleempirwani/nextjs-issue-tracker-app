import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (!issue)
      return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

    await prisma.issue.delete({ where: { id: params.id } });
    return NextResponse.json(
      { message: "Successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Internal server error" },
      { status: 500 }
    );
  }
}
