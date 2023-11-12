"use client";

import { Card } from "@radix-ui/themes";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface IIssueBarChartProps {
  open?: number;
  inProgress?: number;
  closed?: number;
}

const IssueBarChart = ({
  open = 10,
  inProgress = 20,
  closed = 30,
}: IIssueBarChartProps) => {
  const data = [
    {
      label: "Open",
      value: open,
    },
    {
      label: "In-progress",
      value: inProgress,
    },
    {
      label: "Closed",
      value: closed,
    },
  ];

  return (
    <div className="border-2 p-5 rounded-md">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            barSize={50}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IssueBarChart;
