import { LinkedList } from '../../../dataStructures';
import { removeNthFromEnd } from './19';

describe('remove nth node from end of linked list', () => {
  test('n = 0 should throw error', () => {
    const list = new LinkedList<number>();
    expect(() => removeNthFromEnd(list, 0)).toThrow();
  });

  test('n larger than list size should throw error', () => {
    const list = new LinkedList<number>();
    expect(() => removeNthFromEnd(list, 1)).toThrow();
  });

  test('n = 1 for list with one element', () => {
    const list = new LinkedList<number>();
    list.insert(3);
    removeNthFromEnd(list, 1);
    expect(list.size).toEqual(0);
    expect(list.root).toBeNull();
  });

  test('n = 1 for list with three elements', () => {
    const list = new LinkedList<number>();
    list.insert(3);
    list.insert(4);
    list.insert(5);

    removeNthFromEnd(list, 1);
    expect(list.size).toEqual(2);
    expect(list.toArray()).toEqual([ 3, 4 ]);
  });

  test('n = 2 for list with three elements', () => {
    const list = new LinkedList<number>();
    list.insert(3);
    list.insert(4);
    list.insert(5);

    removeNthFromEnd(list, 2);
    expect(list.size).toEqual(2);
    expect(list.toArray()).toEqual([ 3, 5 ]);
  });

  test('n = 3 for list with three elements', () => {
    const list = new LinkedList<number>();
    list.insert(3);
    list.insert(4);
    list.insert(5);

    removeNthFromEnd(list, 3);
    expect(list.size).toEqual(2);
    expect(list.toArray()).toEqual([ 4, 5 ]);
  });
});