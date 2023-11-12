import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { FaPenToSquare } from "react-icons/fa6";

interface IIssueEditBtn {
  id: string;
}

const IssueEditBtn = ({ id }: IIssueEditBtn) => {
  return (
    <Link href={`/issues/edit/${id}`} className="flex flex-1 md:flex-auto">
      <Button color="green" className="cursor-pointer flex-1">
        <FaPenToSquare />
        Edit Issue
      </Button>
    </Link>
  );
};

export default IssueEditBtn;
