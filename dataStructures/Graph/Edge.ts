export class Edge {
  source: number;
  target: number;
  weight: number;

  constructor(source: number, target: number, weight = 0) {
    this.source = source;
    this.target = target;
    this.weight = weight;
  }
}