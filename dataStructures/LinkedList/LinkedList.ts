import { Node } from './Node';

export class LinkedList<T> {
  root: Node<T>;
  size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(val: T, idx = this.size): void {
    if(idx < 0) idx = 0;
    if(idx > this.size) idx = this.size;

    let ptr: Node<T> = this.root;
    let prev: Node<T> = null;

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

  remove(idx = this.size - 1): T {
    if(idx >= this.size) idx = this.size - 1;
    if(idx < 0) idx = 0;

    let prev: Node<T> = null;
    let ptr: Node<T> = this.root;

    for(let i = 0; i < idx; i++) {
      prev = ptr;
      ptr = ptr.next;
    }

    if(prev === null) {
      this.root = this.root ? this.root.next : null;
    }
    else {
      prev.next = ptr.next;
    }

    this.size--;
    return ptr.val;
  }

  toArray() {
    const arr: T[] = [];
    let ptr: Node<T> = this.root;
    while(ptr) {
      arr.push(ptr.val);
      ptr = ptr.next;
    }
    return arr;
  }
}