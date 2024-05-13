import type { ResponseData } from "@/interfaces/infra";
import type { StockSchema } from "@/schemas/stock";

export interface GatewayImplementation {
  getAll(): Promise<ResponseData<StockSchema[]>>;
}
