import prisma from "@/prisma/client";
import { Status } from "@/types";
import { Heading, ScrollArea, Separator, Text } from "@radix-ui/themes";
import IssueBadge from "./IssueBadge";

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-3 border-2 rounded-md w-full">
      <Heading as="h3" mb="5">
        Latest Issues
      </Heading>

      <ScrollArea type="always" scrollbars="vertical" className="max-h-[60vh]">
        <div className="p-2 pr-5">
          {latestIssues.map((latestIssue, index) => {
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
      </ScrollArea>
    </div>
  );
};

export default LatestIssues;
