import prisma from "@/prisma/client";
import { updateIssueStatusSchema } from "@/schema";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validation = updateIssueStatusSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const { status } = body;

    const issue = await prisma.issue.findUnique({ where: { id: params.id } });

    if (!issue)
      return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

    const updatedIssue = await prisma.issue.update({
      where: { id: params.id },
      data: {
        status,
      },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    return NextResponse.json(
      { error, message: "Internal server error" },
      { status: 500 }
    );
  }
}
