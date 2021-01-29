import { CompareFunc } from './types';
import { PriorityQueue } from '../../dataStructures';

export const heapSort = <T>(arr: T[], compare: CompareFunc<T>): void => {
  const heap = new PriorityQueue<T>(compare);
  arr.forEach(elem => heap.insert(elem));
  for(let i = 0; i < arr.length; i++) {
    arr[i] = heap.remove();
  }
};