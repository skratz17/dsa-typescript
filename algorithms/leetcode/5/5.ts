export const longestPalindromicSubstring = (s: string): string => {
  let longest = '';

  for(let i = 0; i < s.length; i++) {
    const singleCharCenter = getLongestPalindromeAround(s, i, i);
    if(singleCharCenter.length > longest.length) longest = singleCharCenter;

    if(i + 1 < s.length) {
      const doubleCharCenter = getLongestPalindromeAround(s, i, i + 1);
      if(doubleCharCenter.length > longest.length) longest = doubleCharCenter;
    }
  }

  return longest;
};

const getLongestPalindromeAround = (s: string, start: number, end: number): string => {
  let palindrome = '';

  while(start >= 0 && end < s.length && s[start] === s[end]) {
    palindrome = start !== end ? s[start] + palindrome + s[end] : s[start];
    start--;
    end++;
  }

  return palindrome;
};