import { z } from "zod";

import { CommonFieldsSchema } from "@/shared/schemas";

import { ProductSchema } from "../product";

export const ShoppingListItemSchema = z
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

export type ShoppingListItemSchema = z.infer<typeof ShoppingListItemSchema>;
