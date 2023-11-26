import { ITableColumn } from "@/types";

export const NAV_LINKS = [
  { label: "Dashboard", link: "/" },
  { label: "Issues", link: "/issues" },
];

export const STATUS_SELECT_MENU = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "In progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

export const BADGE = {
  OPEN: ["red", "Open"],
  IN_PROGRESS: ["orange", "In progress"],
  CLOSED: ["green", "Closed"],
};

export const COLUMNS: ITableColumn[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  {
    label: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];

export const COLUMNS_NAMES = COLUMNS.map((item) => item.value);
