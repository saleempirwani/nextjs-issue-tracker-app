"use client";

import { STATUS_SELECT_MENU } from "@/data/appData";
import { Select } from "@radix-ui/themes";

const SelectMenu = () => {
  return (
    <Select.Root defaultValue="all">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          {STATUS_SELECT_MENU.map((item, index) => (
            <Select.Item key={index} value={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectMenu;
