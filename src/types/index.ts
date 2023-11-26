export type Order = "asc" | "desc";

export type Status = "OPEN" | "IN_PROGRESS" | "CLOSED";

export interface IIssue {
  title: string;
  desc: string;
  status: Status;
  createdAt: string;
}

export interface IssueQuery {
  orderBy: keyof IIssue;
  status: Status;
  page: string;
}

export interface ITableColumn {
  label: string;
  value: keyof IIssue;
  className?: string;
}
