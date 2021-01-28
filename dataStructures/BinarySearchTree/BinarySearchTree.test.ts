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

  test('delete leaf node', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(3);

    bst.delete(3);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left).toBeNull();
  });

  test('delete node with right child', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(3);
    bst.insert(4);

    bst.delete(3);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.val).toEqual(4);
  });

  test('delete node with left child', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(3);
    bst.insert(2);

    bst.delete(3);
    expect(bst.root.val).toEqual(5);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.val).toEqual(2);
  });

  test('delete node with two children where successor is right child', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(3);

    bst.delete(5);
    expect(bst.root.val).toEqual(10);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right).toBeNull();
  });

  test('delete node with two children where successor is in right child\'s left subtree', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(10);
    bst.insert(7);
    bst.insert(3);
    bst.insert(13);
    bst.insert(11);
    bst.insert(12);

    /* verify structure is

            5
          /   \
        3       10
               /  \
              7     13
                   /
                  11
                    \
                     12
    */

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.right.left.val).toEqual(7);
    expect(bst.root.right.right.val).toEqual(13);
    expect(bst.root.right.right.left.val).toEqual(11);
    expect(bst.root.right.right.left.right.val).toEqual(12);

    /* remove node with val = 10 and verify structure becomes:
            5
          /   \
        3       11
               /  \
              7     13
                   /
                  12
    */

    bst.delete(10);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(11);
    expect(bst.root.right.left.val).toEqual(7);
    expect(bst.root.right.right.val).toEqual(13);
    expect(bst.root.right.right.left.val).toEqual(12);
  });
});