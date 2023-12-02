"use client";

import IssueDeleteBtn from "@/components/IssueDeleteBtn";
import IssueDetails from "@/components/IssueDetails";
import IssueEditBtn from "@/components/IssueEditBtn";
import SelectMenu from "@/components/SelectMenu";
import { ASSGINEES } from "@/data/mock";
import { Issue } from "@prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";

interface Props {
  issue: Issue;
}

const IssueDetailView = ({ issue }: Props) => {
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box style={{ gridColumn: "span 4 / span 4" }}>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <SelectMenu
            data={ASSGINEES}
            defaultValue="unassigned"
            onValueChange={() => {}}
          />
          <IssueEditBtn id={issue.id} />
          <IssueDeleteBtn id={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailView;
