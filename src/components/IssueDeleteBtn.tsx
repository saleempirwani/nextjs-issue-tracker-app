"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Spinner from "./Spinner";

interface IssueDeleteBtn {
  id: string;
}

const IssueDeleteBtn = ({ id }: IssueDeleteBtn) => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitIssue = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/issues/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/issues");
        router.refresh();
        return;
      }
    } catch (error) {
      setError("Unexpected error occurred");
      console.log("ERR [error] =====> ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-1 md:flex-auto">
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            color="red"
            className="cursor-pointer flex-1 md:flex-auto"
            disabled={isSubmitting}
          >
            <FaTrash />
            Delete Issue
            {isSubmitting && <Spinner />}
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
              <Button
                variant="solid"
                color="red"
                className="cursor-pointer"
                onClick={onSubmitIssue}
              >
                Yes
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default IssueDeleteBtn;
