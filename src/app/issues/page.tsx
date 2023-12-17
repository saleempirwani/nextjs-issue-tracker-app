import IssueAction from "@/components/IssueAction";
import IssuesTable from "@/components/IssuesTable";
import Pagination from "@/components/Pagination";
import { COLUMNS_NAMES } from "@/data/appData";
import prisma from "@/prisma/client";
import { IssueQuery } from "@/types";
import { Status } from "@prisma/client";

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

  return (
    <div className="p-5">
      <IssueAction />
      <IssuesTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        pageCount={pageSize}
        itemCount={issueCount}
      />
    </div>
  );
};

export default IssuesPage;
