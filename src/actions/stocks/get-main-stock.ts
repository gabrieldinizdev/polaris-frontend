"use server";

import { createStockGateway } from "@/infra/gateway/stocks";
import type { StockSchema } from "@/schemas/stock";

export async function getMainStock(): Promise<StockSchema> {
  const gateway = createStockGateway();

  const response = await gateway.getAll();

  const mainStock = response.data.shift() as StockSchema;

  return mainStock;
}
