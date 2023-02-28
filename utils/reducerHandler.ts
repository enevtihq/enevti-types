export interface ReducerHandler {
  invoke: <T = unknown>(
    name: string,
    params?: Record<string, unknown>
  ) => Promise<T>;
}
