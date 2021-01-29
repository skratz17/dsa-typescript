export class Node<T> {
  val: T;
  next: Node<T>;

  constructor(val?: T) {
    if(val) this.val = val;
    else this.val = null;

    this.next = null;
  }
}