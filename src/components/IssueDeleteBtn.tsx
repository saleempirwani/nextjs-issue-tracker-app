"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";

const IssueDeleteBtn = () => {
  return (
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
};

export default IssueDeleteBtn;
