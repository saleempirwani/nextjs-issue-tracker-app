"use client";

import { Select } from "@radix-ui/themes";

interface ISelectMenuProps {
  data: { label: string; value: string }[];
  defaultValue: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

const SelectMenu = ({
  data,
  defaultValue,
  onValueChange,
}: ISelectMenuProps) => {
  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
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
