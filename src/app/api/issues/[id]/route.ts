import prisma from "@/prisma/client";
import { updateIssueSchema } from "@/schema";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validation = updateIssueSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const { assignedToUserId, title, description } = body;

    // if (assignedToUserId) {
    //   const user = await prisma.user.findUnique({
    //     where: { id: assignedToUserId },
    //   });
    //   if (!user)
    //     return NextResponse.json({ error: "Invalid user" }, { status: 400 });
    // }

    const issue = await prisma.issue.findUnique({ where: { id: params.id } });
    if (!issue)
      return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

    const updatedIssue = await prisma.issue.update({
      where: { id: params.id },
      data: {
        title,
        description,
        // assignedToUserId
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
