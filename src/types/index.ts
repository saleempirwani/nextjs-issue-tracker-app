export type Status = "OPEN" | "IN_PROGRESS" | "CLOSED";

export interface IIssue {
  title: string;
  desc: string;
  status: Status;
  created_at: string;
}
