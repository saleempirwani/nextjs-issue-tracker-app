import { ISSUES } from "@/data/mock";
import { Table } from "@radix-ui/themes";

const IssuesTable = () => {
  return (
    <Table.Root variant="surface">
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
            <Table.Cell>{issue.status}</Table.Cell>
            <Table.Cell>{new Date(issue.created_at).toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
