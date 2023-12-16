"use client";

import { Select } from "@radix-ui/themes";

interface ISelectMenuProps {
  data: { label: string; value: string }[];
  defaultValue: string;
  onValueChange: (value: string) => void;
  value: string;
}

const SelectMenu = ({
  data,
  defaultValue,
  onValueChange,
  value,
}: ISelectMenuProps) => {
  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <Select.Trigger />
      <Select.Content>
        {data.map((item, index) => (
          <Select.Item key={index} value={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SelectMenu;
