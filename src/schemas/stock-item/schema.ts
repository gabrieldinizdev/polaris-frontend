import { z } from "zod";

import { CommonFieldsSchema } from "@/shared/schemas";

import { ProductSchema } from "../product";

export const StockItemSchema = z
  .object({
    quantity: z.number(),
    product: z.string().or(ProductSchema),
    stock: z.string(),
  })
  .merge(CommonFieldsSchema)
  .required({
    quantity: true,
    product: true,
    stock: true,
  });

export type StockItemSchema = z.infer<typeof StockItemSchema>;
