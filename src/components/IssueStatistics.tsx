import { Heading, Text } from "@radix-ui/themes";

const IssueStatistics = () => {
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
    <div className="flex flex-wrap gap-5 mb-10">
      {renderStats("Open", 8)}
      {renderStats("In-progress", 8)}
      {renderStats("Closed", 8)}
    </div>
  );
};

export default IssueStatistics;
