export interface HttpResult<T> {
  responseCode: number,
  responseMessage: string,
  result: T
}
