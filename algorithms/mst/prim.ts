import { Graph, Edge, PriorityQueue } from '../../dataStructures';

export const prim = (graph: Graph): Edge[] => {
  const edges: Edge[] = graph.nodes[0];
  const visited = new Set<number>([ 0 ]);

  const minHeap = new PriorityQueue<Edge>((a, b) => a.weight - b.weight);
  edges.forEach(edge => minHeap.insert(edge));

  const mst: Edge[] = [];

  while(minHeap.size() && visited.size < graph.size) {
    const edge = minHeap.remove();
    if(!visited.has(edge.target)) {
      visited.add(edge.target);
      mst.push(edge);

      if(visited.size === graph.size) {
        return mst;
      }

      const targetOutgoingEdges = graph.nodes[edge.target];
      targetOutgoingEdges.forEach(e => minHeap.insert(e));
    }
  }

  return null;
};