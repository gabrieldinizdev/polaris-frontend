import { stringify } from "querystring";

import { FetchClient } from "@/infra/adapters";
import type { HttpClient, ResponseData } from "@/interfaces/infra";
import type { StockSchema } from "@/schemas/stock";
import type { StockItemSchema } from "@/schemas/stock-item";
import type { PaginationType } from "@/types/common";

import type { GatewayImplementation } from "./interfaces";

class StockGateway implements GatewayImplementation {
  private static instance: StockGateway;

  public static getInstance(args: typeof StockGateway.arguments): StockGateway {
    if (!StockGateway.instance) {
      StockGateway.instance = new StockGateway(args);
    }

    return StockGateway.instance;
  }

  private constructor(private readonly httpClient: HttpClient) {}

  public async getAll(): Promise<ResponseData<StockSchema[]>> {
    const path = "stocks";

    return this.httpClient.request<StockSchema[]>({
      method: "GET",
      path,
    });
  }

  public async returnItemsFromStockById(
    id: string,
    pagination: PaginationType
  ): Promise<ResponseData<StockItemSchema[]>> {
    const params = stringify(pagination);
    const path = `stocks/${id}/items?${params}`;

    return this.httpClient.request<StockItemSchema[]>({
      method: "GET",
      path,
    });
  }
}

export const createStockGateway = () =>
  StockGateway.getInstance(new FetchClient(process.env.API_BASEURL as string));
