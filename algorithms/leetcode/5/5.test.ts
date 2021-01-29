import { longestPalindromicSubstring } from './5';

describe('longest palindromic substring', () => {
  test('babad -> bab', () => {
    expect(longestPalindromicSubstring('babad')).toEqual('bab');
  });

  test('cbbd -> bb', () => {
    expect(longestPalindromicSubstring('cbbd')).toEqual('bb');
  });

  test('a -> a', () => {
    expect(longestPalindromicSubstring('a')).toEqual('a');
  });

  test('ac -> a', () => {
    expect(longestPalindromicSubstring('ac')).toEqual('a');
  });

  test('aaaaaaaaaab -> aaaaaaaaaa', () => {
    expect(longestPalindromicSubstring('aaaaaaaaaab')).toEqual('aaaaaaaaaa')
  });

  test('abababbbbbbbbbbbbbx -> bbbbbbbbbbbbb', () => {
    expect(longestPalindromicSubstring('abababbbbbbbbbbbbbx')).toEqual('bbbbbbbbbbbbb')
  })
});