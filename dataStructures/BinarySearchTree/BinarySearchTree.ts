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
    
    if(this.compare(node.val, val) === 0) return node;
    else if(this.compare(node.val, val) > 0) return this._search(node.left, val);
    else return this._search(node.right, val);
  }

  delete(val: T) {
    this.root = this._delete(this.root, val);
  }

  _delete(node: BinarySearchTreeNode<T>, val: T) {
    if(!node) return null;

    if(this.compare(node.val, val) === 0) {
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

  inorder() {
    const arr: T[] = [];
    this._inorder(this.root, arr);
    return arr;
  }

  _inorder(node: BinarySearchTreeNode<T>, arr: T[]) {
    if(!node) return;

    this._inorder(node.left, arr);
    arr.push(node.val);
    this._inorder(node.right, arr);
  }

  inorderIterative() {
    const arr: T[] = [];
    const stack: BinarySearchTreeNode<T>[] = [];
    let node = this.root;
    while(node || stack.length) {
      while(node) {
        stack.push(node);
        node = node.left;
      }

      node = stack.pop();
      arr.push(node.val);
      node = node.right;
    }

    return arr;
  }

  preorder() {
    const arr: T[] = [];
    this._preorder(this.root, arr);
    return arr;
  }

  _preorder(node: BinarySearchTreeNode<T>, arr: T[]) {
    if(!node) return;

    arr.push(node.val);
    this._preorder(node.left, arr);
    this._preorder(node.right, arr);
  }

  preorderIterative() {
    const arr: T[] = [];
    const stack: BinarySearchTreeNode<T>[] = [];

    let node = this.root;
    while(node || stack.length) {
      while(node) {
        arr.push(node.val);
        if(node.right) stack.push(node.right);
        node = node.left;
      }

      node = stack.pop();
    }

    return arr;
  }

  postorder() {
    const arr: T[] = [];
    this._postorder(this.root, arr);
    return arr;
  }

  _postorder(node: BinarySearchTreeNode<T>, arr: T[]) {
    if(!node) return;

    this._postorder(node.left, arr);
    this._postorder(node.right, arr);
    arr.push(node.val);
  }

  postorderIterative() {
    const arr: BinarySearchTreeNode<T>[] = [];
    const stack: BinarySearchTreeNode<T>[] = [];

    let node = this.root;
    while(node || stack.length) {
      while(node) {
        stack.push(node);
        if(node.right && node.right === arr[arr.length - 1]) break;
        if(node.right) stack.push(node.right);
        node = node.left;
      }

      arr.push(stack.pop());
      node = stack.pop();
    }

    return arr.map(node => node.val);
  }
}