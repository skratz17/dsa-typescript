export interface SortFunc<T> {
  (arr: T[], compare: CompareFunc<T>): void;
}

export interface CompareFunc<T> {
  (a: T, b: T): number;
}