import { Callout, Text } from "@radix-ui/themes";
import React from "react";

interface IErrorMessageProps {
  message: string | undefined;
  type?: "text" | "callout";
}

const ErrorMessage = ({ message, type = "text" }: IErrorMessageProps) => {
  if (!message) return null;

  if (type === "text")
    return (
      <Text as="p" color="red">
        {message}
      </Text>
    );

  return (
    <Callout.Root className="mb-5" color="red">
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorMessage;
