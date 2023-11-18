import IssueBarChart from "@/components/IssueBarChart";
import IssueStatistics from "@/components/IssueStatistics";
import LatestIssues from "@/components/LatestIssues";
import { Flex } from "@radix-ui/themes";

const DashboardView = () => {
  return (
    <Flex
      direction={{
        initial: "column",
        md: "row",
      }}
      gap="5"
      className="p-5"
    >
      <div className="flex-1 mb-5 md:mb-0">
        <IssueStatistics />
        <IssueBarChart />
      </div>
      <div className="flex flex-1">
        <LatestIssues />
      </div>
    </Flex>
  );
};

export default DashboardView;
