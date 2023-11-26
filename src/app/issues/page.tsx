import IssueAction from "@/components/IssueAction";
import IssuesTable from "@/components/IssuesTable";
import Pagination from "@/components/Pagination";
import SelectMenu from "@/components/SelectMenu";
import { COLUMNS_NAMES, STATUS_SELECT_MENU } from "@/data/appData";
import prisma from "@/prisma/client";
import { IssueQuery } from "@/types";
import { Status } from "@prisma/client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const orderBy = COLUMNS_NAMES.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  console.log(issueCount);

  return (
    <div className="p-5">
      <IssueAction />
      <IssuesTable issues={issues} searchParams={searchParams} />
      <Pagination />
    </div>
  );
};

export default IssuesPage;
