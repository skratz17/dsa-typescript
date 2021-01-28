import { BinarySearchTree } from './BinarySearchTree';

describe('unbalanced binary search tree functionality', () => {
  test('insert', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    expect(bst.root).toBeNull();

    bst.insert(5);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();

    bst.insert(3);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right).toBeNull();

    bst.insert(10);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);

    bst.insert(4);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.right.val).toEqual(4);
  });

  test('search for nonexistent value', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    expect(bst.search(5)).toBeNull();
  });

  test('search for value that matches root', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    expect(bst.search(5)).toEqual({ val: 5, left: null, right: null });
  });

  test('search for value in left subtree', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(3);
    expect(bst.search(3)).toEqual({ val: 3, left: null, right: null });
  });

  test('search for value in right subtree', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(3);
    expect(bst.search(10)).toEqual({ val: 10, left: null, right: null });
  });
});