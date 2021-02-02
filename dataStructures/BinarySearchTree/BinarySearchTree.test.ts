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

  test('recursive inorder traversal', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(4);

    expect(bst.inorder()).toEqual([ 1, 3, 4, 5, 10 ]);
  });

  test('iterative inorder traversal', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(4);

    expect(bst.inorderIterative()).toEqual([ 1, 3, 4, 5, 10 ]);
  });

  test('recursive preorder traversal', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(4);

    expect(bst.preorder()).toEqual([ 5, 3, 1, 4, 10 ]);
  });

  test('iterative preorder traversal', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(4);

    expect(bst.preorderIterative()).toEqual([ 5, 3, 1, 4, 10 ]);
  });

  test('recursive postorder traversal', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(4);

    expect(bst.postorder()).toEqual([ 1, 4, 3, 10, 5 ]);
  });

  test('iterative postorder traversal', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(4);

    expect(bst.postorderIterative()).toEqual([ 1, 4, 3, 10, 5 ]);
  });

  test('serialize bst with two levels full tree', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);

    expect(bst.serialize()).toEqual('5,3,10');
  });

  test('serialize bst with three levels and leaf far left', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);

    expect(bst.serialize()).toEqual('5,3,10,1,null,null,null');
  });

  test('serialize bst with three levels and leaf one from left', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(4);

    expect(bst.serialize()).toEqual('5,3,10,null,4,null,null');
  });

  test('serialize bst with three levels and leaf one from right', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(7);

    expect(bst.serialize()).toEqual('5,3,10,null,null,7,null');
  });

  test('serialize bst with three levels and leaf at far right', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(12);

    expect(bst.serialize()).toEqual('5,3,10,null,null,null,12');
  });

  test('serialize bst that just goes off to the right', () => {
    const bst = new BinarySearchTree<number>((a, b) => a - b);

    bst.insert(5);
    bst.insert(7);
    bst.insert(9);

    expect(bst.serialize()).toEqual('5,null,7,null,null,null,9');
  });

  test('deserialize bst with two levels full tree', () => {
    const bst = BinarySearchTree.deserialize('5,3,10', (a: number, b: number) => a - b);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
  });

  test('deserialize bst with three levels and leaf far left', () => {
    const bst = BinarySearchTree.deserialize('5,3,10,1,null,null,null', (a, b) => a - b);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.left.val).toEqual(1);
    expect(bst.root.left.right).toBeNull();
    expect(bst.root.right.left).toBeNull();
    expect(bst.root.right.right).toBeNull();
  });

  test('deserialize bst with three levels and leaf one from left', () => {
    const bst = BinarySearchTree.deserialize('5,3,10,null,4,null,null', (a, b) => a - b);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.left).toBeNull();
    expect(bst.root.left.right.val).toEqual(4);
    expect(bst.root.right.left).toBeNull();
    expect(bst.root.right.right).toBeNull();
  });

  test('serialize bst with three levels and leaf one from right', () => {
    const bst = BinarySearchTree.deserialize('5,3,10,null,null,7,null', (a, b) => a - b);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.left).toBeNull();
    expect(bst.root.left.right).toBeNull();
    expect(bst.root.right.left.val).toEqual(7);
    expect(bst.root.right.right).toBeNull();
  });

  test('serialize bst with three levels and leaf at far right', () => {
    const bst = BinarySearchTree.deserialize('5,3,10,null,null,null,12', (a, b) => a - b);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left.val).toEqual(3);
    expect(bst.root.right.val).toEqual(10);
    expect(bst.root.left.left).toBeNull();
    expect(bst.root.left.right).toBeNull();
    expect(bst.root.right.left).toBeNull();
    expect(bst.root.right.right.val).toEqual(12);
  });

  test('serialize bst that just goes off to the right', () => {
    const bst = BinarySearchTree.deserialize('5,null,7,null,null,null,9', (a, b) => a - b);

    expect(bst.root.val).toEqual(5);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right.val).toEqual(7);
    expect(bst.root.right.left).toBeNull();
    expect(bst.root.right.right.val).toEqual(9);
  });
});