export class PriorityQueue<T> {
  heap: T[];
  compare: (a: T, b: T) => number;

  constructor(compareFunction: (a: T, b: T) => number) {
    this.heap = [ null ];
    this.compare = compareFunction;
  }

  insert(node: T): void {
    let index = this.heap.length;
    this.heap.push(node);
    let parentIndex = Math.floor(index / 2);
    while(parentIndex > 0 && this.compare(this.heap[parentIndex], this.heap[index]) > 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  }

  remove(): T {
    if(this.size() <= 0) {
      throw new Error('Cannot remove from empty priority queue.');
    }

    if(this.size() === 1) {
      return this.heap.pop();
    }

    let index = 1;
    const removedNode = this.heap[index];
    this.heap[index] = this.heap.pop();

    while(index * 2 < this.heap.length) {
      let swapIndex = index * 2;
      if(index * 2 + 1 < this.heap.length) {
        swapIndex = this.compare(this.heap[index * 2], this.heap[index * 2 + 1]) > 0 ? index * 2 + 1 : index * 2;
      }
      if(this.compare(this.heap[index], this.heap[swapIndex]) <= 0) break;
      this.swap(index, swapIndex);
      index = swapIndex;
    }

    return removedNode;
  }

  size(): number {
    return this.heap.length - 1;
  }

  swap(i: number, j: number): void {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}