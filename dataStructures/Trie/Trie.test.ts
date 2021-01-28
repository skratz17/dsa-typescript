import { Trie } from './Trie';

describe('trie', () => {
  test('insert words', () => {
    const trie = new Trie<boolean>();

    trie.insert('a', true);
    expect(trie.root.children.size).toEqual(1);
    expect(trie.root.getChild('a').val).toEqual(true);

    trie.insert('abc', true);
    expect(trie.root.children.size).toEqual(1);
    expect(trie.root.getChild('a').val).toEqual(true);
    expect(trie.root.getChild('a').getChild('b').val).toEqual(null);
    expect(trie.root.getChild('a').getChild('b').getChild('c').val).toEqual(true);

    trie.insert('cba', true);
    expect(trie.root.children.size).toEqual(2);
    expect(trie.root.getChild('c').val).toEqual(null);
    expect(trie.root.getChild('c').getChild('b').val).toEqual(null);
    expect(trie.root.getChild('c').getChild('b').getChild('a').val).toEqual(true);
  });

  test('search words', () => {
    const trie = new Trie<boolean>();

    trie.insert('jacob', true);
    trie.insert('eckert', true);
    trie.insert('jacobeckert', true);

    expect(trie.search('jacob')).toEqual(true);
    expect(trie.search('eckert')).toEqual(true);
    expect(trie.search('jacobeckert')).toEqual(true);
    expect(trie.search('jacobec')).toEqual(null);
    expect(trie.search('eckerteckert')).toEqual(null);
  });

  test('store object at trie nodes', () => {
    interface WordFacts {
      id: number;
      factoid: string;
    }

    const trie = new Trie<WordFacts>();

    trie.insert('jacob', { id: 1, factoid: 'Best first name in the biz' });
    trie.insert('eckert', { id: 2, factoid: 'What a cool last name' });
    trie.insert('jacobeckert', { id: 3, factoid: 'Wow what a combo' });

    expect(trie.search('jacob')).toEqual({ id: 1, factoid: 'Best first name in the biz' });
    expect(trie.search('eckert')).toEqual({ id: 2, factoid: 'What a cool last name' });
    expect(trie.search('jacobeckert')).toEqual({ id: 3, factoid: 'Wow what a combo' });
    expect(trie.search('jacobec')).toEqual(null);
    expect(trie.search('eckerteckert')).toEqual(null);
  });
});