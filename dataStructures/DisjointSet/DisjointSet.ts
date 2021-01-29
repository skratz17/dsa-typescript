export class DisjointSet {
  sets: number[];
  ranks: number[];

  constructor(n: number) {
    this.sets = [];
    this.ranks = [];

    for(let i = 0; i < n; i++) {
      this.sets[i] = i;
      this.ranks[i] = 0;
    }
  }

  find(id: number): number {
    if(this.sets[id] === id) return id;
    else {
      const representative = this.find(this.sets[id]);
      this.sets[id] = representative;
      return representative;
    }
  }

  union(x: number, y: number): void {
    const xRep = this.find(x);
    const yRep = this.find(y);

    if(this.ranks[xRep] > this.ranks[yRep]) {
      this.sets[y] = xRep;
      this.ranks[xRep]++;
    }
    else {
      this.sets[x] = yRep;
      this.ranks[yRep]++;
    }
  }
}