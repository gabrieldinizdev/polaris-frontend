"use server";

import { createStockGateway } from "@/infra/gateway/stocks";
import type { StockItemSchema } from "@/schemas/stock-item";
import type { PaginationType } from "@/types/common";

export async function returnItemsFromStockById(
  id: string,
  pagination: PaginationType
): Promise<StockItemSchema[]> {
  const gateway = createStockGateway();

  const response = await gateway.returnItemsFromStockById(id, pagination);

  return response.data;
}
