"use client";

import IssueBadge from "@/components/IssueBadge";
import SelectMenu from "@/components/SelectMenu";
import { ISSUES } from "@/data/mock";
import { Status } from "@/types";
import { Button, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { marked } from "marked";

const IssuePage = () => {
  const issue = ISSUES[0];

  return (
    <Flex className="p-5" gap="9">
      <div className="flex-[0.8]">
        <Heading as="h2" className="mb-2 md:text-3xl">
          {issue.title}
        </Heading>
        <div className="flex items-center gap-x-5 mb-5">
          <IssueBadge status={issue.status as Status} />
          <Text as="p">{new Date(issue.created_at).toDateString()}</Text>
        </div>
        <div className="p-5 border-2 rounded-md">
          <ScrollArea
            type="scroll"
            scrollbars="vertical"
            className="max-h-[50vh]"
          >
            <div dangerouslySetInnerHTML={{ __html: marked(issue.desc) }} />
          </ScrollArea>
        </div>
      </div>
      <div className="flex-[0.2] flex flex-col gap-y-5">
        <SelectMenu />
        <div className="flex flex-col gap-y-2">
          <Button className="bg-green-500 cursor-pointer">
            <FaPenToSquare />
            Edit Issue
          </Button>
          <Button className="bg-red-500 cursor-pointer">
            <FaTrash />
            Delete Issue
          </Button>
        </div>
      </div>
    </Flex>
  );
};

export default IssuePage;
