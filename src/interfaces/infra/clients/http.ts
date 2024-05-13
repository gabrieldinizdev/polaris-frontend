import type { RequestData, ResponseData } from "../common";

export interface HttpClient {
  request<Response, Payload = unknown>(
    data: RequestData<Payload>,
    config?: RequestInit
  ): Promise<ResponseData<Response>>;
}
