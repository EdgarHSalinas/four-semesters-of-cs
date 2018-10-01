/**
 * Binary search recursive implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} searchValue
 * @return {boolean}
 */

export const binarySearchRecursive = (sortedArray, searchValue, left, right) => {
  if (left > right) return false;

  const mid = left + ((right - left) / 2);

  if (searchValue === sortedArray[mid]) {
    return true;
  } else if (searchValue < sortedArray[mid]) {
      return binarySearchRecursive(sortedArray, searchValue, left, mid - 1);
  } else {
    return binarySearchRecursive(sortedArray, searchValue, mid + 1, right);
  }
}


