import IssuesTable from "@/components/IssuesTable";
import Pagination from "@/components/Pagination";
import SelectMenu from "@/components/SelectMenu";
import { STATUS_SELECT_MENU } from "@/data/appData";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesView = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <SelectMenu data={STATUS_SELECT_MENU} defaultValue="all" />
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
      <IssuesTable />
      <Pagination />
    </div>
  );
};

export default IssuesView;
