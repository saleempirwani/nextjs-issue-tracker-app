"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { createIssueSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Tabs, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import MarkdownPreview from "./MarkdownPreview";
import Spinner from "./Spinner";
import { Issue } from "@prisma/client";

type IssueForm = z.infer<typeof createIssueSchema>;

interface IProps {
  issue?: Issue;
}

const IssueForm = ({ issue }: IProps) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const { description } = watch();

  const router = useRouter();

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitIssue = async (data: any) => {
    setIsSubmitting(true);

    try {
      let response: Response;

      if (issue) {
        response = await fetch(`/api/issues/${issue.id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch("/api/issues", {
          method: "POST",
          body: JSON.stringify(data),
        });
      }

      if (response.ok) {
        router.push("/issues");
        router.refresh();
        return;
      }
    } catch (error) {
      setError("Unexpected error occurred");
      console.log("ERR [error] =====> ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl p-5">
      <ErrorMessage type="callout" message={error} />

      <form className="space-y-5" onSubmit={handleSubmit(onSubmitIssue)}>
        <TextField.Root className="py-2">
          <TextField.Input
            placeholder="Title"
            {...register("title")}
            defaultValue={issue?.title}
          />
        </TextField.Root>
        <ErrorMessage message={errors.title?.message} />

        <Tabs.Root defaultValue="editor">
          <Tabs.List>
            <Tabs.Trigger value="editor">Editor</Tabs.Trigger>
            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          </Tabs.List>

          <Box pt="2">
            <Tabs.Content value="editor">
              <Controller
                name="description"
                control={control}
                defaultValue={issue?.description}
                render={({ field }) => (
                  <SimpleMDE placeholder="Description" {...field} />
                )}
              />
            </Tabs.Content>
            <Tabs.Content value="preview">
              <MarkdownPreview
                className="h-[50vh]"
                text={description || issue?.description!}
              />
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <ErrorMessage message={errors.description?.message} />

        <div className="flex justify-end">
          <Button className="cursor-pointer text-right" disabled={isSubmitting}>
            {isSubmitting
              ? `${issue ? "Updating" : "Creating"}`
              : `${issue ? "Update" : "Updating"}`}{" "}
            Issue
            {isSubmitting && <Spinner />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
