import { Graph, Edge } from '../../dataStructures';

export const expectFindMST = (mstFunc: (g: Graph) => Edge[]): void => {
  const graph = new Graph(5);

  graph.addUndirectedEdge(0, 4, 2);
  graph.addUndirectedEdge(0, 3, 1);
  graph.addUndirectedEdge(0, 2, 4);
  graph.addUndirectedEdge(0, 1, 3);
  graph.addUndirectedEdge(2, 1, 2);
  graph.addUndirectedEdge(3, 2, 4);
  graph.addUndirectedEdge(4, 3, 3);

  const mst = mstFunc(graph);
  expect(mst).toHaveLength(4);

  let mstWeightSum = 0;
  for(const edge of mst) {
    mstWeightSum += edge.weight;
  }

  expect(mstWeightSum).toEqual(8);
  expect(containsAllVertices(mst, graph)).toEqual(true);
};

export const expectNullIfNoMST = (mstFunc: (g: Graph) => Edge[]): void => {
  const graph = new Graph(5);

  graph.addUndirectedEdge(0, 1, 2);
  graph.addUndirectedEdge(2, 3, 4);

  const mst = mstFunc(graph);
  expect(mst).toBeNull()
};

const containsAllVertices = (mst: Edge[], graph: Graph): boolean => {
  const vertices = new Set<number>();
  for(let i = 0; i < graph.size; i++) {
    vertices.add(i);
  }

  for(const { source, target } of mst) {
    vertices.delete(source);
    vertices.delete(target);
  }

  return vertices.size === 0;
};