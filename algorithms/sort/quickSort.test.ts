import { quickSort } from './quickSort';
import { expectSortArray, expectSortArrayDesc, expectSortEmptyArray, expectSortSingleElemArray, expectSortTwoElemArray } from './basicSortExpectations';

describe('quick sort', () => {
  test('sorts array of numbers ascending', () => {
    expectSortArray(quickSort);
  });

  test('sorts array of numbers descending', () => {
    expectSortArrayDesc(quickSort);
  });

  test('handles array with single element', () => {
    expectSortSingleElemArray(quickSort);
  });

  test('handles array with two elements', () => {
    expectSortTwoElemArray(quickSort);
  });

  test('handles empty array', () => {
    expectSortEmptyArray(quickSort);
  });
});