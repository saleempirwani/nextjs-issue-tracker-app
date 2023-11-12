"use client";

import IssueBadge from "@/components/IssueBadge";
import SelectMenu from "@/components/SelectMenu";
import { ASSGINEES, ISSUES } from "@/data/mock";
import { Status } from "@/types";
import {
  AlertDialog,
  Button,
  Flex,
  Heading,
  ScrollArea,
  Text,
} from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { marked } from "marked";
import Link from "next/link";

const IssuePage = () => {
  const issue = ISSUES[0];
  const id = "1";

  const renderDelete = () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" className="cursor-pointer flex-1 md:flex-auto">
          <FaTrash />
          Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Issue</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? You want to delete this issue.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray" className="cursor-pointer">
              No
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" className="cursor-pointer">
              Yes
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );

  return (
    <div className="flex flex-col-reverse md:flex-row gap-9 p-5">
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
        <SelectMenu data={ASSGINEES} defaultValue="unassigned" />

        <div className="flex md:flex-col gap-2">
          <Link
            href={`/issues/edit/${id}`}
            className="flex flex-1 md:flex-auto"
          >
            <Button color="green" className="cursor-pointer flex-1">
              <FaPenToSquare />
              Edit Issue
            </Button>
          </Link>

          {renderDelete()}
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
