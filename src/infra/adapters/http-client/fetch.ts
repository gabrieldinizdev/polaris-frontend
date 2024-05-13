import type { HttpClient, ResponseData } from "@/interfaces/infra";
import type { RequestData } from "@/interfaces/infra/common/request";

export class FetchClient implements HttpClient {
  public constructor(private readonly baseURL: string) {}

  public async request<Response, Payload = unknown>(
    { method, path, body, headers = {} }: RequestData<Payload>,
    config?: RequestInit
  ): Promise<ResponseData<Response>> {
    const url = `${this.baseURL}/${path}`;

    const request: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body && JSON.stringify(body),
      ...config,
    };

    const response = await fetch(url, request);

    const data = (await response.json()) as ResponseData<Response>;

    return data;
  }
}
