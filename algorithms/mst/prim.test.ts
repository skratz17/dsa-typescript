import { prim } from './prim';
import { expectFindMST, expectNullIfNoMST } from './mstExpectations';

describe('prim minimum spanning tree', () => {
  test('finds mst in undirected graph', () => {
    expectFindMST(prim);
  });

  test('returns null when no mst exists', () => {
    expectNullIfNoMST(prim);
  });
});