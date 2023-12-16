import z from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(255),
  description: z.string().min(3, "Description is required."),
});

export const updateIssueSchema = z.object({
  title: z.string().min(3, "Title is required.").max(255),
  description: z.string().min(3, "Description is required."),
});

export const updateIssueStatusSchema = z.object({
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]),
});
