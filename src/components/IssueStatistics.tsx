import { Heading, Text } from "@radix-ui/themes";

interface IProps {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueStatistics = ({ open, inProgress, closed }: IProps) => {
  const renderStats = (label: string, count: number) => (
    <div className="flex flex-col md:flex-1 w-full p-3 border-2 rounded-md">
      <Text as="p" className="mb-2">
        {label} Issues
      </Text>
      <Heading as="h6" className="text-2xl">
        {count}
      </Heading>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-5 mb-5">
      {renderStats("Open", open)}
      {renderStats("In-progress", inProgress)}
      {renderStats("Closed", closed)}
    </div>
  );
};

export default IssueStatistics;
