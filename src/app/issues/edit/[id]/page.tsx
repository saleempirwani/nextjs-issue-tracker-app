import IssueForm from "@/components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface IProps {
  params: { id: string };
}

const EditIssuePage = async ({ params }: IProps) => {
  const issue = await prisma.issue.findUnique({ where: { id: params.id } });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
