"use client";

import { IconButton, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

interface Props {
  pageCount: number; // no. of records per page
  currentPage: number; // current page no,
  itemCount: number; // no of records in the filtered by status
}

const Pagination = ({ pageCount, currentPage, itemCount }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Math.ceil(itemCount / pageCount);
  if (page <= 1) return;

  const onChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("/issues/?" + params.toString());
  };

  return (
    <div className="flex items-center mb-5 gap-x-3">
      <Text as="p">
        Page {currentPage} of {page}
      </Text>
      <IconButton
        className="cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => onChangePage(1)}
      >
        <BsChevronDoubleLeft />
      </IconButton>
      <IconButton
        className="cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <BsChevronLeft />
      </IconButton>
      <IconButton
        className="cursor-pointer"
        disabled={currentPage === page}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <BsChevronRight />
      </IconButton>
      <IconButton
        className="cursor-pointer"
        disabled={currentPage === page}
        onClick={() => onChangePage(page)}
      >
        <BsChevronDoubleRight />
      </IconButton>
    </div>
  );
};

export default Pagination;
