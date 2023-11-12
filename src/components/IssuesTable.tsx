import { ISSUES } from "@/data/mock";
import { Table } from "@radix-ui/themes";
import IssueBadge from "./IssueBadge";
import { Status } from "@/types";

const IssuesTable = () => {
  return (
    <Table.Root variant="surface" className="border-gray-300">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {ISSUES.map((issue, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
            <Table.Cell>
              <IssueBadge status={issue.status as Status} />
            </Table.Cell>
            <Table.Cell>{new Date(issue.created_at).toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
