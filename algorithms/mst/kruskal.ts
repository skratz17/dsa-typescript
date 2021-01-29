import { Graph, Edge, DisjointSet } from '../../dataStructures';
import { quickSort } from '../sort/quickSort';

export const kruskal = (graph: Graph): Edge[] => {
  const mst: Edge[] = [];
  const edges = graph.getAllEdges();
  quickSort<Edge>(edges, (a, b) => a.weight - b.weight);

  const disjointSet = new DisjointSet(graph.size);

  for(const edge of edges) {
    if(disjointSet.find(edge.source) !== disjointSet.find(edge.target)) {
      mst.push(edge);
      disjointSet.union(edge.source, edge.target);
      if(mst.length === graph.size - 1) return mst;
    }
  }

  return null;
};