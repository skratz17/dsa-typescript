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

  search(val: T) {
    return this._search(this.root, val);
  }

  _search(node: BinarySearchTreeNode<T>, val: T) {
    if(!node) return null;
    
    if(node.val === val) return node;
    else if(this.compare(node.val, val) > 0) return this._search(node.left, val);
    else return this._search(node.right, val);
  }
}