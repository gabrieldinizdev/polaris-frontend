import { z } from "zod";

import { CommonFieldsSchema } from "@/shared/schemas";

import { StockItemSchema } from "../stock-item";

export const StockSchema = z
  .object({
    name: z.string(),
    items: z.array(StockItemSchema).optional(),
  })
  .merge(CommonFieldsSchema)
  .required({
    name: true,
  });

export type StockSchema = z.infer<typeof StockSchema>;
