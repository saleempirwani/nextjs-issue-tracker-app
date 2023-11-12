"use client";

import { LATEST_ISSUES } from "@/data/mock";
import { Status } from "@/types";
import { Heading, Separator, Text } from "@radix-ui/themes";
import IssueBadge from "./IssueBadge";

const LatestIssues = () => {
  return (
    <div className="p-3 border-2 rounded-md w-full">
      <Heading as="h3" mb="5">
        Latest Issues
      </Heading>

      <div className="p-2">
        {LATEST_ISSUES.map((latestIssue, index) => {
          return (
            <div key={index} className="space-y-3">
              {index !== 0 && (
                <Separator size="4" orientation="horizontal" my="4" />
              )}
              <Text as="p">{latestIssue.title}</Text>
              <IssueBadge status={latestIssue.status as Status} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestIssues;
