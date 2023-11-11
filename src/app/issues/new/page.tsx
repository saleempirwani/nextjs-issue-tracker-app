"use client";

import { Button, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface IIssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IIssueForm>();

  const onSubmitIssue = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl p-5">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmitIssue)}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button className="cursor-pointer">Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
