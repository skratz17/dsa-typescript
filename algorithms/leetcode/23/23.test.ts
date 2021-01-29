import { LinkedList } from '../../../dataStructures';
import { mergeKSortedLists } from './23';

describe('leetcode 23 - merge k sorted lists', () => {
  test('three sorted lists', () => {
    const list1 = new LinkedList<number>();
    list1.insert(1);
    list1.insert(4);
    list1.insert(5);

    const list2 = new LinkedList<number>();
    list2.insert(1);
    list2.insert(3);
    list2.insert(4);

    const list3 = new LinkedList<number>();
    list3.insert(2);
    list3.insert(6);

    const mergedList = mergeKSortedLists(list1, list2, list3);
    expect(mergedList.toArray()).toEqual([ 1, 1, 2, 3, 4, 4, 5, 6 ]);
  });

  test('one sorted list', () => {
    const list = new LinkedList<number>();
    list.insert(1);
    list.insert(4);
    list.insert(5);
      
    const mergedList = mergeKSortedLists(list);
    expect(mergedList.toArray()).toEqual([ 1, 4, 5 ]);
  });

  test('zero lists', () => {
    const mergedList = mergeKSortedLists();
    expect(mergedList.toArray()).toEqual([ ]);
  });

  test('one empty list', () => {
    const list = new LinkedList<number>();

    const mergedList = mergeKSortedLists(list);
    expect(mergedList.toArray()).toEqual([ ])
  });
});