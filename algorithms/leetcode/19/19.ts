import { LinkedList } from '../../../dataStructures';

export const removeNthFromEnd = <T>(list: LinkedList<T>, n: number): LinkedList<T> => {
  if(n > list.size || n < 1) throw new Error('Index out of bounds.');

  let fast = list.root;
  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }

  let prev = null;
  let remove = list.root;
  while(fast) {
    prev = remove;
    remove = remove.next;
    fast = fast.next;
  }

  if(prev === null) {
    list.root = remove.next;
  }
  else {
    prev.next = remove.next;
  }

  list.size--;
  return list;
};