import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export class BinarySearchTree<T> {
  root: BinarySearchTreeNode<T>;
  compare: (a: T, b: T) => number;

  constructor(compareFunction: (a: T, b: T) => number) {
    this.root = null;
    this.compare = compareFunction;
  }

  insert(val: T): void {
    this.root = this._insert(this.root, val);
  }

  _insert(node: BinarySearchTreeNode<T>, val: T): BinarySearchTreeNode<T> {
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

  search(val: T): BinarySearchTreeNode<T> {
    return this._search(this.root, val);
  }

  _search(node: BinarySearchTreeNode<T>, val: T): BinarySearchTreeNode<T> {
    if(!node) return null;
    
    if(this.compare(node.val, val) === 0) return node;
    else if(this.compare(node.val, val) > 0) return this._search(node.left, val);
    else return this._search(node.right, val);
  }

  delete(val: T): void {
    this.root = this._delete(this.root, val);
  }

  _delete(node: BinarySearchTreeNode<T>, val: T): BinarySearchTreeNode<T> {
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

  inorder(): T[] {
    const arr: T[] = [];
    this._inorder(this.root, arr);
    return arr;
  }

  _inorder(node: BinarySearchTreeNode<T>, arr: T[]): void {
    if(!node) return;

    this._inorder(node.left, arr);
    arr.push(node.val);
    this._inorder(node.right, arr);
  }

  inorderIterative(): T[] {
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

  preorder(): T[] {
    const arr: T[] = [];
    this._preorder(this.root, arr);
    return arr;
  }

  _preorder(node: BinarySearchTreeNode<T>, arr: T[]): void {
    if(!node) return;

    arr.push(node.val);
    this._preorder(node.left, arr);
    this._preorder(node.right, arr);
  }

  preorderIterative(): T[] {
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

  postorder(): T[] {
    const arr: T[] = [];
    this._postorder(this.root, arr);
    return arr;
  }

  _postorder(node: BinarySearchTreeNode<T>, arr: T[]): void {
    if(!node) return;

    this._postorder(node.left, arr);
    this._postorder(node.right, arr);
    arr.push(node.val);
  }

  postorderIterative(): T[] {
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

  serialize(): string {
    let serialization = [];
    let queue = [ this.root ];
    while(true) {
      const level = [];
      while(queue.length) {
        const node = queue.shift();
        serialization.push(node ? node.val : 'null');
        if(node) {
          level.push(node.left);
          level.push(node.right);
        }
        else {
          level.push(null);
          level.push(null);
        }
      }
      if(!level.every(val => val === null)) queue = level;
      else break;
    }
    return serialization.join(',');
  }

  static deserialize(serialization: string, compareFunction: (a: number, b: number) => number): BinarySearchTree<number> {
    const bst = new BinarySearchTree<number>(compareFunction);

    const root = BinarySearchTree._deserialize(serialization.split(','), 0);
    bst.root = root;

    return bst;
  }

  static _deserialize(serialization: string[], idx: number): BinarySearchTreeNode<number> {
    if(idx >= serialization.length || serialization[idx] === 'null') return null;

    const node = new BinarySearchTreeNode<number>(Number(serialization[idx]));

    node.left = BinarySearchTree._deserialize(serialization, idx * 2 + 1);
    node.right = BinarySearchTree._deserialize(serialization, idx * 2 + 2);

    return node;
  }
}