import IssueBarChart from "@/components/IssueBarChart";
import IssueStatistics from "@/components/IssueStatistics";
import LatestIssues from "@/components/LatestIssues";
import { Grid } from "@radix-ui/themes";

const DashboardView = () => {
  return (
    <Grid columns={{ xs: "1", md: "2" }} rows="2" gap="9" className="p-5">
      <div className="">
        <IssueStatistics />
        <IssueBarChart />
      </div>
      <LatestIssues />
    </Grid>
  );
};

export default DashboardView;
