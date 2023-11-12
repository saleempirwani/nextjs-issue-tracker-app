"use client";
import { Heading } from "@radix-ui/themes";

import IssueBadge from "@/components/IssueBadge";
import MarkdownPreview from "@/components/MarkdownPreview";
import { IIssue, Status } from "@/types";
import { Text } from "@radix-ui/themes";

interface IIssueDetailsProps {
  issue: IIssue;
}

const IssueDetails = ({ issue }: IIssueDetailsProps) => {
  return (
    <div className="flex-[0.8]">
      <Heading as="h2" className="mb-2 md:text-3xl">
        {issue.title}
      </Heading>

      <div className="flex items-center gap-x-5 mb-5">
        <IssueBadge status={issue.status as Status} />
        <Text as="p">{new Date(issue.created_at).toDateString()}</Text>
      </div>

      <MarkdownPreview className="max-h-[50vh]" text={issue.desc} />
    </div>
  );
};

export default IssueDetails;
