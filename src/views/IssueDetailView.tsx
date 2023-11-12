"use client";

import IssueDeleteBtn from "@/components/IssueDeleteBtn";
import IssueDetails from "@/components/IssueDetails";
import IssueEditBtn from "@/components/IssueEditBtn";
import SelectMenu from "@/components/SelectMenu";
import { ASSGINEES, ISSUES } from "@/data/mock";
import { useParams } from "next/navigation";

const IssueDetailView = () => {
  const params = useParams();

  const issue = ISSUES[Number(params.id)];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-9 p-5">
      <IssueDetails issue={issue} />

      <div className="flex flex-1 flex-col gap-5">
        <SelectMenu data={ASSGINEES} defaultValue="unassigned" />
        <div className="flex flex-col gap-2">
          <IssueEditBtn id={params.id as string} />
          <IssueDeleteBtn />
        </div>
      </div>
    </div>
  );
};

export default IssueDetailView;
