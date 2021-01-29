import { heapSort } from './heapSort';
import { expectSortArray, expectSortArrayDesc, expectSortEmptyArray, expectSortSingleElemArray, expectSortTwoElemArray, sortHellaArrays } from './basicSortExpectations';

describe('heap sort', () => {
  test('sorts array of numbers ascending', () => {
    expectSortArray(heapSort);
  });

  test('sorts array of numbers descending', () => {
    expectSortArrayDesc(heapSort);
  });

  test('handles array with single element', () => {
    expectSortSingleElemArray(heapSort);
  });

  test('handles array with two elements', () => {
    expectSortTwoElemArray(heapSort);
  });

  test('handles empty array', () => {
    expectSortEmptyArray(heapSort);
  });

  test('handles sorting hella arrays', () => {
    sortHellaArrays(heapSort);
  });
});