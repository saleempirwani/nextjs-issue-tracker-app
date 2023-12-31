"use client";

import IssueDeleteBtn from "@/components/IssueDeleteBtn";
import IssueDetails from "@/components/IssueDetails";
import IssueEditBtn from "@/components/IssueEditBtn";
import SelectMenu from "@/components/SelectMenu";
import Spinner from "@/components/Spinner";
import { STATUS_SELECT_MENU } from "@/data/appData";
import { Issue } from "@prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  issue: Issue;
}

const IssueDetailView = ({ issue }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(issue.status as string);

  const onValueChange = async (value: string) => {
    setIsSubmitting(true);
    setStatus(value);

    try {
      let response: Response = await fetch(`/api/issues/status/${issue.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: value }),
      });

      if (response.ok) {
        toast.success("Successfully Updated!");
        return;
      }

      throw new Error();
    } catch (error) {
      toast.error("Could not Update!");

      console.log("ERR [error] =====> ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5" className="p-5">
      <Box style={{ gridColumn: "span 4 / span 4" }}>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          {isSubmitting ? (
            <Spinner />
          ) : (
            <SelectMenu
              data={STATUS_SELECT_MENU.slice(1, STATUS_SELECT_MENU.length)}
              onValueChange={onValueChange}
              value={status}
              defaultValue=""
            />
          )}
          <IssueEditBtn id={issue.id} />
          <IssueDeleteBtn id={issue.id} />
        </Flex>
      </Box>
      <Toaster position="bottom-right" />
    </Grid>
  );
};

export default IssueDetailView;
