"use client";

import { ISSUES } from "@/data/mock";
import { Table } from "@radix-ui/themes";
import IssueBadge from "./IssueBadge";
import { Status } from "@/types";

import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { useState } from "react";

type Order = "asc" | "desc";

const IssuesTable = () => {
  const [order, setOrder] = useState<Order>("desc");

  const onOrderChange = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <Table.Root variant="surface" className="border-gray-300 mb-5">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>
            <div className="flex items-center gap-x-1">
              Issue
              <div className="cursor-pointer" onClick={onOrderChange}>
                {order === "asc" ? <BsArrowDown /> : <BsArrowUp />}
              </div>
            </div>
          </Table.ColumnHeaderCell>
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
