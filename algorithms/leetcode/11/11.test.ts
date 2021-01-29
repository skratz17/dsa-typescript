import { maxArea } from './11';

describe('leetcode 11 - container with most water', () => {
  test('test case one', () => {
    expect(maxArea([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ])).toEqual(49);
  });

  test('test case two', () => {
    expect(maxArea([ 1, 1, ])).toEqual(1);
  });

  test('test case three', () => {
    expect(maxArea([ 4, 3, 2, 1, 4 ])).toEqual(16);
  });

  test('test case four', () => {
    expect(maxArea([ 1, 2, 1 ])).toEqual(2);
  });

  test('test case five', () => {
    expect(maxArea([ 10, 10, 1, 1, 1, 1, 1, 1, 1 ])).toEqual(10);
  });
});