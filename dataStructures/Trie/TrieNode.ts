export class TrieNode<T> {
  val: T;
  children: Map<string, TrieNode<T>>;

  constructor(val?: T) {
    if(val) this.val = val;
    else this.val = null;

    this.children = new Map<string, TrieNode<T>>();
  }

  addChild(char: string, node: TrieNode<T>): void {
    this.children.set(char, node);
  }

  getChild(char: string): TrieNode<T> {
    return this.children.has(char) ? this.children.get(char) : null;
  }
}