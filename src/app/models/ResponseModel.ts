export interface ResponseModel<T> {
  commandTitle: string;
  success: boolean;
  observations: object[];
  response: T;
}
