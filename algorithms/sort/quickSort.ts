import { CompareFunc } from './types';

export const quickSort = <T>(arr: T[], compare: CompareFunc<T>): void => {
  _quickSort<T>(arr, compare, 0, arr.length - 1);
};

const _quickSort = <T>(arr: T[], compare: CompareFunc<T>, start: number, end: number): void => {
  if(end - start <= 0) return;

  const pivotIndex = partition(arr, compare, start, end);
  _quickSort(arr, compare, start, pivotIndex - 1);
  _quickSort(arr, compare, pivotIndex + 1, end);
};

const partition = <T>(arr: T[], compare: CompareFunc<T>, start: number, end: number): number => {
  let startIndex = start;
  let pivotIndex = end;

  while(pivotIndex > startIndex) {
    if(compare(arr[startIndex], arr[pivotIndex]) > 0) {
      swap(arr, pivotIndex, pivotIndex - 1);
      pivotIndex--;
      if(pivotIndex !== startIndex) {
        swap(arr, startIndex, pivotIndex + 1);
      }
    }
    else {
      startIndex++;
    }
  }

  return pivotIndex;
};

const swap = <T>(arr: T[], i: number, j: number): void => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};