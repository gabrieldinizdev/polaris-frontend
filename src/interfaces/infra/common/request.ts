export interface RequestData<Payload = unknown> {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: Payload;
}
