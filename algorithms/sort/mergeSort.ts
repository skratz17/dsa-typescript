import { CompareFunc } from './types';

export const mergeSort = <T>(arr: T[], compare: CompareFunc<T>): void => {
  _mergeSort(arr, compare, 0, arr.length);
};

const _mergeSort = <T>(arr: T[], compare: CompareFunc<T>, start: number, end: number): void => {
  if(start >= end - 1) return;

  const mid = Math.floor((end - start) / 2) + start;
  _mergeSort(arr, compare, start, mid);
  _mergeSort(arr, compare, mid, end);

  merge(arr, compare, start, mid, end);
};

const merge = <T>(arr: T[], compare: CompareFunc<T>, start: number, mid: number, end: number): void => {
  let midPtr = mid;
  let startPtr = start;
  const tmp: T[] = [];

  while(startPtr < mid || midPtr < end) {
    if(startPtr < mid && midPtr < end) {
      if(compare(arr[startPtr], arr[midPtr]) > 0) {
        tmp.push(arr[midPtr++]);
      }
      else {
        tmp.push(arr[startPtr++]);
      }
    }
    else if(startPtr < mid) {
      tmp.push(arr[startPtr++]);
    }
    else {
      tmp.push(arr[midPtr++]);
    }
  }

  for(let i = start; i < end; i++) {
    arr[i] = tmp.shift();
  }
};