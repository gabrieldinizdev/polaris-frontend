import { z } from "zod";

export const CommonFieldsSchema = z.object({
  _id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  deletedAt: z.string().optional(),
});

export type CommonFieldsSchema = z.infer<typeof CommonFieldsSchema>;
