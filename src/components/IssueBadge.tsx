import { BADGE } from "@/data/appData";
import { Status } from "@/types";
import { Badge } from "@radix-ui/themes";

interface IIssueBadgeProps {
  status: Status;
}

const IssueBadge = ({ status }: IIssueBadgeProps) => {
  return <Badge color={BADGE[status][0] as any}>BADGE[status][1]</Badge>;
};

export default IssueBadge;
