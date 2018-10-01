import { binarySearchRecursive } from './binarySearch';




test('binary search of array', () => {
  const sortedArray = [0, 1, 2, 3, 6, 12, 24];
  const answer = binarySearchRecursive(sortedArray, 2, 0, sortedArray.length - 1);

  expect(answer).toBeTruthy();
})