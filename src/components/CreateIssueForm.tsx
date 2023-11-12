"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/schema";
import { z } from "zod";
import ErrorMessage from "@/components/ErrorMessage";
import { useState } from "react";
import Spinner from "./Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const CreateIssueForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitIssue = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl p-5">
      <ErrorMessage type="callout" message={error} />

      <form className="space-y-5" onSubmit={handleSubmit(onSubmitIssue)}>
        <TextField.Root className="py-2">
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage message={errors.title?.message} />

        <Controller
          name="desc"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage message={errors.desc?.message} />

        <Button className="cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? "Creating" : "Create"} New Issue
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default CreateIssueForm;
