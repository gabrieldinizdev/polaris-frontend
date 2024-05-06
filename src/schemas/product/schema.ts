import { z } from "zod";

import { CommonFieldsSchema } from "@/shared/schemas";

export const ProductSchema = z
  .object({
    name: z.string(),
    sku: z.string(),
  })
  .merge(CommonFieldsSchema)
  .required({
    name: true,
    sku: true,
  });

export type ProductSchema = z.infer<typeof ProductSchema>;
