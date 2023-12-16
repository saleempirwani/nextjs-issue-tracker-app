import IssueBarChart from "@/components/IssueBarChart";
import IssueStatistics from "@/components/IssueStatistics";
import LatestIssues from "@/components/LatestIssues";
import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";

const DashboardView = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

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
        <IssueStatistics open={open} inProgress={inProgress} closed={closed} />
        <IssueBarChart open={open} inProgress={inProgress} closed={closed} />
      </div>
      <div className="flex flex-1">
        <LatestIssues />
      </div>
    </Flex>
  );
};

export default DashboardView;
