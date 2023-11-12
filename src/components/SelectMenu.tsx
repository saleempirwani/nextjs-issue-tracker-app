"use client";

import { Select } from "@radix-ui/themes";

interface ISelectMenuProps {
  data: { label: string; value: string }[];
  defaultValue: string;
}

const SelectMenu = ({ data, defaultValue }: ISelectMenuProps) => {
  return (
    <Select.Root defaultValue={defaultValue}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          {data.map((item, index) => (
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
