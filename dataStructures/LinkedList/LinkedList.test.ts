import { LinkedList } from './LinkedList';

describe('linked list', () => {
  test('build linked list appending three elements at end', () => {
    const list = new LinkedList<number>();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.size).toEqual(3);
    expect(list.toArray()).toEqual([ 1, 2, 3 ]);
  });

  test('build linked list inserting three elements at beginning', () => {
    const list = new LinkedList<number>();
    list.insert(1, 0);
    list.insert(2, 0);
    list.insert(3, 0);

    expect(list.size).toEqual(3);
    expect(list.toArray()).toEqual([ 3, 2, 1 ]);
  });

  test('build linked list and insert element at index 1', () => {
    const list = new LinkedList<number>();
    list.insert(1);
    list.insert(2);
    list.insert(3, 1);

    expect(list.size).toEqual(3);
    expect(list.toArray()).toEqual([ 1, 3, 2 ]);
  });
});