import { TrieNode } from './TrieNode';

export class Trie<T> {
  root: TrieNode<T>;

  constructor() {
    this.root = new TrieNode<T>();
  }

  insert(word: string, val: T) {
    let node = this.root;

    for(let i = 0; i < word.length; i++) {
      const child = node.getChild(word[i]) || new TrieNode<T>();
      node.addChild(word[i], child);
      node = child;
    }

    node.val = val;
  }

  search(word: string) {
    let node = this.root;

    for(let i = 0; i < word.length; i++) {
      if(!node) return null;
      node = node.getChild(word[i]);
    }

    return node ? node.val : null;
  }
}