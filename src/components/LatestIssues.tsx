"use client";

import { LATEST_ISSUES } from "@/data/mock";
import { Status } from "@/types";
import { Badge, Heading, Separator, Text } from "@radix-ui/themes";

const LatestIssues = () => {
  const badge = (status: Status) => {
    if (status === "OPEN") return ["red", "Open"];
    if (status === "IN_PROGRESS") return ["orange", "In progress"];
    return ["green", "Closed"];
  };

  return (
    <div className="p-3 border-2 rounded-md w-full">
      <Heading as="h3" mb="5">
        Latest Issues
      </Heading>

      <div className="p-2">
        {LATEST_ISSUES.map((latestIssue, index) => {
          const [color, status] = badge(latestIssue.status as Status);
          return (
            <div key={index} className="space-y-3">
              {index !== 0 && (
                <Separator size="4" orientation="horizontal" my="4" />
              )}
              <Text as="p">{latestIssue.title}</Text>
              <Badge color={color as any}>{status}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestIssues;
