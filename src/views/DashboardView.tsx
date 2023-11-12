import IssueBarChart from "@/components/IssueBarChart";
import IssueStatistics from "@/components/IssueStatistics";
import LatestIssues from "@/components/LatestIssues";

const DashboardView = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-9 p-5">
      <div className="flex flex-1 flex-col mb-5 md:mb-0">
        <IssueStatistics />
        <IssueBarChart />
      </div>
      <div className="flex flex-1">
        <LatestIssues />
      </div>
    </div>
  );
};

export default DashboardView;
