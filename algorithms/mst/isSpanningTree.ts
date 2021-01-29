import { Graph, Edge } from '../../dataStructures';

export const isSpanningTree = (mst: Edge[], graph: Graph): boolean => {
  for(let i = 0; i < graph.size; i++) {
    const vertices = new Set<number>();
    for(let i = 0; i < graph.size; i++) {
      vertices.add(i);
    }

    let edges = [ ...mst ];
    const queue = [ i ];

    while(vertices.size && queue.length) {
      const curr = queue.shift();
      vertices.delete(curr);
      const outgoing = edges.filter(e => e.source === curr);
      edges = edges.filter(e => e.source !== curr);
      outgoing.forEach(e => {
        if(vertices.has(e.target)) queue.push(e.target);
      });
    }

    if(vertices.size === 0) return true;
  }

  return false;
};