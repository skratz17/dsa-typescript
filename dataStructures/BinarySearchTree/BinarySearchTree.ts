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

  delete(val: T) {
    this.root = this._delete(this.root, val);
  }

  _delete(node: BinarySearchTreeNode<T>, val: T) {
    if(!node) return null;

    if(node.val === val) {
      // delete leaf node
      if(node.left === null && node.right === null) return null;

      // delete with one child
      else if((node.left === null && node.right) || (node.right === null && node.left)) {
        return node.left ? node.left : node.right;
      }

      // delete with two children - successor is leftmost child in right subtree
      else {
        let successor = node.right;
        while(successor.left) successor = successor.left;
        node.val = successor.val;
        node.right = this._delete(node.right, successor.val);
      }
    }

    else if(this.compare(node.val, val) > 0) node.left = this._delete(node.left, val);
    else node.right = this._delete(node.right, val);

    return node;
  }
}