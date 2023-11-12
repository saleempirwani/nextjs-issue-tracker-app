import IssueBarChart from "@/components/IssueBarChart";
import IssueStatistics from "@/components/IssueStatistics";
import LatestIssues from "@/components/LatestIssues";
import { Grid } from "@radix-ui/themes";

const DashboardView = () => {
  return (
    <div className="">
      <Grid
        columns={{ xs: "1", md: "2" }}
        rows="2"
        gap={{ xs: "0", md: "9" }}
        className="p-5"
      >
        <div className="mb-5 md:mb-0">
          <IssueStatistics />
          <IssueBarChart />
        </div>
        <LatestIssues />
      </Grid>
    </div>
  );
};

export default DashboardView;
