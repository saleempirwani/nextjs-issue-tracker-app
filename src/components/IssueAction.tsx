"use client";

import SelectMenu from "@/components/SelectMenu";
import { STATUS_SELECT_MENU } from "@/data/appData";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const IssueAction = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onValueChange = (status: string) => {
    const params = new URLSearchParams();

    if (status && status !== STATUS_SELECT_MENU[0].value)
      params.append("status", status);

    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = `?${params.toString()}`;
    router.push("/issues/" + query);
  };

  return (
    <div className="flex items-center justify-between mb-5">
      <SelectMenu
        data={STATUS_SELECT_MENU}
        onValueChange={onValueChange}
        defaultValue={searchParams.get("status") || ""}
      />
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueAction;
