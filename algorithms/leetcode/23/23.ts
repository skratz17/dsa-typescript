import { LinkedList, PriorityQueue } from '../../../dataStructures';
import { Node } from '../../../dataStructures/LinkedList/Node';

export const mergeKSortedLists = <T>(...lists: LinkedList<T>[]): LinkedList<T> => {
  const list = new LinkedList<T>();
  const minHeap = new PriorityQueue<Node<T>>((a: any, b: any) => a.val - b.val);
  lists.forEach(l => {
    if(l.root) {
      minHeap.insert(l.root)
    }
  });

  while(minHeap.size()) {
    const node = minHeap.remove();
    list.insert(node.val);
    if(node.next) minHeap.insert(node.next);
  }

  return list;
};