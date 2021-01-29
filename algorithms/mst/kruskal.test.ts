import { kruskal } from './kruskal';
import { expectFindMST, expectNullIfNoMST } from './mstExpectations';

describe('kruskal minimum spanning tree', () => {
  test('should find mst', () => {
    expectFindMST(kruskal);
  });

  test('should return null if no mst', () => {
    expectNullIfNoMST(kruskal);
  });
});