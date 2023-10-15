import { assertEqualArrays } from '../../utils/js/index.mjs';

function shouldMove(value, comparand, position, asc = true) {
  return position >= 0 && (asc ? comparand > value : comparand < value);
}

function insertSort(arr, asc = true) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let insertPoint = i - 1;

    while (shouldMove(key, arr[insertPoint], insertPoint, asc)) {
      arr[insertPoint + 1] = arr[insertPoint];
      insertPoint -= 1;
    }

    arr[insertPoint + 1] = key;
  }

  return arr;
}

assertEqualArrays(insertSort([3, 1, 7, 2, 1, 9]), [1, 1, 2, 3, 7, 9]);
assertEqualArrays(insertSort([3, 1, 7, 2, 1, 9], false), [9, 7, 3, 2, 1, 1]);
