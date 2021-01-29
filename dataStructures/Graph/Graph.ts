import { Edge } from './Edge';

export class Graph {
  nodes: Edge[][];
  size: number;

  constructor(n: number) {
    this.nodes = [];
    this.size = n;

    for(let i = 0; i < n; i++) {
      this.nodes.push([]);
    }
  }

  addEdge(u: number, v: number, weight = 0): void {
    this.nodes[u].push(new Edge(u, v, weight));
  }

  addUndirectedEdge(u: number, v: number, weight = 0): void {
    this.addEdge(u, v, weight);
    this.addEdge(v, u, weight);
  }

  removeEdge(u: number, v: number, weight = 0): void {
    const edgeIndex = this.nodes[u].findIndex(edge => edge.target === v && edge.weight === 0);
    this.nodes[u].splice(edgeIndex, 1);
  }

  removeUndirectedEdge(u: number, v: number, weight = 0): void {
    this.removeEdge(u, v, weight);
    this.removeEdge(v, u, weight);
  }

  getAllEdges(): Edge[] {
    const edges: Edge[] = [];
    this.nodes.forEach(outgoingEdges => edges.push(...outgoingEdges));
    return edges;
  }

  getVerticesWithIndegreeZero(): number[] {
    const verticesWithIncomingEdges = new Set<number>();
    for(let i = 0; i < this.size; i++) {
      const outgoingEdges = this.nodes[i];
      outgoingEdges.forEach(edge => verticesWithIncomingEdges.add(edge.target));
    }

    const verticesWithIndegreeZero: number[] = [];
    for(let i = 0; i < this.size; i++) {
      if(!verticesWithIncomingEdges.has(i)) verticesWithIndegreeZero.push(i);
    }

    return verticesWithIndegreeZero;
  }
}