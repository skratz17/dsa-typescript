import { mergeSort } from './mergeSort';
import { expectSortArray, expectSortArrayDesc, expectSortEmptyArray, expectSortSingleElemArray, expectSortTwoElemArray } from './basicSortExpectations';

describe('merge sort', () => {
  test('sorts array of numbers ascending', () => {
    expectSortArray(mergeSort);
  });

  test('sorts array of numbers descending', () => {
    expectSortArrayDesc(mergeSort);
  });

  test('handles array with single element', () => {
    expectSortSingleElemArray(mergeSort);
  });

  test('handles array with two elements', () => {
    expectSortTwoElemArray(mergeSort);
  });

  test('handles empty array', () => {
    expectSortEmptyArray(mergeSort);
  });
});