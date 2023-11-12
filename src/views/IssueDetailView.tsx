import IssueDeleteBtn from "@/components/IssueDeleteBtn";
import IssueDetails from "@/components/IssueDetails";
import IssueEditBtn from "@/components/IssueEditBtn";
import SelectMenu from "@/components/SelectMenu";
import { ASSGINEES, ISSUES } from "@/data/mock";

const IssueDetailView = () => {
  const issue = ISSUES[0];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-9 p-5">
      <IssueDetails issue={issue} />
      <div className="flex-[0.2] flex flex-col gap-y-5">
        <SelectMenu data={ASSGINEES} defaultValue="unassigned" />
        <div className="flex md:flex-col gap-2">
          <IssueEditBtn id="" />
          <IssueDeleteBtn />
        </div>
      </div>
    </div>
  );
};

export default IssueDetailView;
