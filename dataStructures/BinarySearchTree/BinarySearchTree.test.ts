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
});