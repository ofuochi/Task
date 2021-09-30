// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IApiManager<T> {
  fetchData(): Promise<T[]>;
}
