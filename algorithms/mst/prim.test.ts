import { Graph } from '../../dataStructures';
import { prim } from './prim';
import { isSpanningTree } from './isSpanningTree';

describe('prim minimum spanning tree', () => {
  test('finds mst in undirected graph', () => {
    const graph = new Graph(5);

    graph.addUndirectedEdge(0, 4, 2);
    graph.addUndirectedEdge(0, 3, 1);
    graph.addUndirectedEdge(0, 2, 4);
    graph.addUndirectedEdge(0, 1, 3);
    graph.addUndirectedEdge(2, 1, 2);
    graph.addUndirectedEdge(3, 2, 4);
    graph.addUndirectedEdge(4, 3, 3);

    const mst = prim(graph);
    expect(mst).toHaveLength(4);

    let mstWeightSum = 0;
    for(const edge of mst) {
      mstWeightSum += edge.weight;
    }

    expect(mstWeightSum).toEqual(8);
    expect(isSpanningTree(mst, graph)).toEqual(true);
  });

  test('returns null when no mst exists', () => {
    const graph = new Graph(5);

    graph.addUndirectedEdge(0, 1, 2);
    graph.addUndirectedEdge(2, 3, 4);

    const mst = prim(graph);
    expect(mst).toBeNull();
  });
});