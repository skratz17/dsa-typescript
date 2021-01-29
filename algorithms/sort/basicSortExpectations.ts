import { SortFunc } from './types';

export const expectSortEmptyArray = (sortFunction: SortFunc<number>) => {
  const arr: number[] = [];

  sortFunction(arr, (a, b) => a - b);

  expect(arr).toEqual([]);
};

export const expectSortSingleElemArray = (sortFunction: SortFunc<number>) => {
  const arr = [ 1 ];

  sortFunction(arr, (a, b) => a - b);

  expect(arr).toEqual([ 1 ]);
};

export const expectSortTwoElemArray = (sortFunction: SortFunc<number>) => {
  const arr = [ 3, 1 ];

  sortFunction(arr, (a, b) => a - b);

  expect(arr).toEqual([ 1, 3 ]);
};

export const expectSortArray = (sortFunction: SortFunc<number>) => {
  const arr = [ 3, 2, 4, 1 ];

  sortFunction(arr, (a, b) => a - b);

  expect(arr).toEqual([ 1, 2, 3, 4 ]);
};

export const expectSortArrayDesc = (sortFunction: SortFunc<number>) => {
  const arr = [ 3, 2, 4, 1, 5 ];

  sortFunction(arr, (a, b) => b - a);

  expect(arr).toEqual([ 5, 4, 3, 2, 1 ]);
};