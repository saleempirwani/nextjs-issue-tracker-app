import { IssueQuery, Status } from "@/types";
import { Table } from "@radix-ui/themes";
import IssueBadge from "./IssueBadge";
import { COLUMNS } from "@/data/appData";
import { Issue } from "@prisma/client";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";

interface Props {
  issues: Issue[];
  searchParams: IssueQuery;
}

const IssuesTable = ({ issues, searchParams }: Props) => {
  return (
    <Table.Root variant="surface" className="border-gray-300 mb-5 ">
      <Table.Header>
        <Table.Row>
          {COLUMNS.map((column, index) => (
            <Table.ColumnHeaderCell key={index} className={column.className}>
              <Link
                href={{ query: { ...searchParams, orderBy: column.value } }}
              >
                {column.label}
              </Link>
              {column.value === searchParams.orderBy && (
                <BsArrowUp className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue, index) => (
          <Table.Row
            key={index}
            className="hover:bg-gray-100 transition-colors"
          >
            <Table.RowHeaderCell className="cursor-pointer">
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
            </Table.RowHeaderCell>
            <Table.Cell>
              <IssueBadge status={issue.status as Status} />
            </Table.Cell>
            <Table.Cell>{new Date(issue.createdAt).toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
