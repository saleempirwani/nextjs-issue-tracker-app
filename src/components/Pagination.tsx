import { IconButton, Text } from "@radix-ui/themes";
import React from "react";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const Pagination = () => {
  return (
    <div className="flex items-center mb-5 gap-x-3">
      <Text as="p">Page 1 of 5</Text>
      <IconButton className="cursor-pointer">
        <BsChevronDoubleLeft />
      </IconButton>
      <IconButton className="cursor-pointer">
        <BsChevronLeft />
      </IconButton>
      <IconButton className="cursor-pointer">
        <BsChevronRight />
      </IconButton>
      <IconButton className="cursor-pointer">
        <BsChevronDoubleRight />
      </IconButton>
    </div>
  );
};

export default Pagination;
