import { Node } from './Node';

export class LinkedList<T> {
  root: Node<T>;
  size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(val: T, idx = this.size) {
    if(idx < 0) idx = 0;
    if(idx > this.size) idx = this.size;

    let ptr = this.root;
    let prev = null;

    for(let i = 0; i < idx; i++) {
      prev = ptr;
      ptr = ptr.next;
    }

    const node = new Node<T>(val);
    node.next = ptr;

    if(prev === null) {
      this.root = node;
    }
    else {
      prev.next = node;
    }

    this.size++;
  }

  toArray() {
    const arr: T[] = [];
    let ptr = this.root;
    while(ptr) {
      arr.push(ptr.val);
      ptr = ptr.next;
    }
    return arr;
  }
}