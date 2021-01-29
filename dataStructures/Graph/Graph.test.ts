import { Graph } from './Graph';
import { Edge } from './Edge';

describe('graph', () => {
  test('all edges are correctly set', () => {
    const graph = new Graph(5);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 1);

    const edges: Edge[] = graph.getAllEdges();

    expect(edges).toHaveLength(5);
    expect(edges[0]).toEqual({ source: 0, target: 1, weight: 0 });
    expect(edges[1]).toEqual({ source: 0, target: 2, weight: 0 });
    expect(edges[2]).toEqual({ source: 2, target: 3, weight: 0 });
    expect(edges[3]).toEqual({ source: 3, target: 4, weight: 0 });
    expect(edges[4]).toEqual({ source: 4, target: 1, weight: 0 });
  });

  test('undirected edges are correctly set', () => {
    const graph = new Graph(2);
    graph.addUndirectedEdge(0, 1);

    const edges: Edge[] = graph.getAllEdges();

    expect(edges).toHaveLength(2);
    expect(edges[0]).toEqual({ source: 0, target: 1, weight: 0 });
    expect(edges[1]).toEqual({ source: 1, target: 0, weight: 0 });
  });

  test('removing a directed edge', () => {
    const graph = new Graph(2);
    graph.addEdge(0, 1);

    let edges: Edge[] = graph.getAllEdges();
    expect(edges).toHaveLength(1);

    graph.removeEdge(0, 1);
    edges = graph.getAllEdges();
    expect(edges).toHaveLength(0);
  });

  test('removing an undirected edge', () => {
    const graph = new Graph(2);
    graph.addUndirectedEdge(0, 1);

    let edges: Edge[] = graph.getAllEdges();
    expect(edges).toHaveLength(2);

    graph.removeUndirectedEdge(0, 1);
    edges = graph.getAllEdges();
    expect(edges).toHaveLength(0);
  });

  test('getting vertices with indegree zero', () => {
    const graph = new Graph(5);

    /*
    0 -> 1    4 -> 3
      \> 2
    */
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(4, 3);

    const vertices: number[] = graph.getVerticesWithIndegreeZero();
    expect(vertices).toHaveLength(2);
    expect(vertices).toEqual([ 0, 4 ]);
  });
});