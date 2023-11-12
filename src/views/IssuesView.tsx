import IssuesTable from "@/components/IssuesTable";
import Pagination from "@/components/Pagination";
import SelectMenu from "@/components/SelectMenu";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesView = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <SelectMenu />
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
