import { DisjointSet } from './DisjointSet';

describe('disjoint set', () => {
  test('disjoint set with five elements', () => {
    /**
     * The set will be: 0-1-2  3-4
     */
    const disjointSet = new DisjointSet(5);
    disjointSet.union(0, 1);
    disjointSet.union(1, 2);

    disjointSet.union(3, 4);

    expect(disjointSet.find(0)).toEqual(1);
    expect(disjointSet.find(1)).toEqual(1);
    expect(disjointSet.find(2)).toEqual(1);

    expect(disjointSet.find(3)).toEqual(4);
    expect(disjointSet.find(4)).toEqual(4);
  });
});