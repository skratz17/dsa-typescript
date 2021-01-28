import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export class BinarySearchTree<T> {
  root: BinarySearchTreeNode<T>;
  compare: (a: T, b: T) => number;

  constructor(compareFunction: (a: T, b: T) => number) {
    this.root = null;
    this.compare = compareFunction;
  }

  insert(val: T) {
    this.root = this._insert(this.root, val);
  }

  _insert(node: BinarySearchTreeNode<T>, val: T) {
    if(node === null) {
      return new BinarySearchTreeNode<T>(val);
    }

    if(this.compare(node.val, val) > 0) {
      node.left = this._insert(node.left, val);
    }
    else {
      node.right = this._insert(node.right, val);
    }

    return node;
  }
}