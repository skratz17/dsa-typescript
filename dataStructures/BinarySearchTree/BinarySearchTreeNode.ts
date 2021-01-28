export class BinarySearchTreeNode<T> {
  val: T;
  left: BinarySearchTreeNode<T>;
  right: BinarySearchTreeNode<T>;

  constructor(val?: T) {
    if(val) this.val = val;
    this.left = null;
    this.right = null;
  }
}