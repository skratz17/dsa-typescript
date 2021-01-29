import { bubbleSort } from './bubbleSort';
import { expectSortArray, expectSortArrayDesc, expectSortEmptyArray, expectSortSingleElemArray, expectSortTwoElemArray, sortHellaArrays } from './basicSortExpectations';

describe('bubble sort', () => {
  test('sorts array of numbers ascending', () => {
    expectSortArray(bubbleSort);
  });

  test('sorts array of numbers descending', () => {
    expectSortArrayDesc(bubbleSort);
  });

  test('handles array with single element', () => {
    expectSortSingleElemArray(bubbleSort);
  });

  test('handles array with two elements', () => {
    expectSortTwoElemArray(bubbleSort);
  });

  test('handles empty array', () => {
    expectSortEmptyArray(bubbleSort);
  });

  test('handles sorting hella arrays', () => {
    sortHellaArrays(bubbleSort);
  });
});