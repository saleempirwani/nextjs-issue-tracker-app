import prisma from "@/prisma/client";
import IssueDetailView from "@/views/IssueDetailView";
import { notFound } from "next/navigation";

interface IProps {
  params: { id: string };
}

const fetchIssue = (id: string) => prisma.issue.findUnique({ where: { id } });

const IssueDetailPage = async ({ params }: IProps) => {
  const issue = await fetchIssue(params.id);

  if (!issue) return notFound();

  return <IssueDetailView issue={issue} />;
};

export default IssueDetailPage;
