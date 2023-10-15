import { assertEqualArrays } from '../../utils/js/index.mjs';

function insertSort(arr, reverse = false) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let insertPoint = i - 1;

    while (insertPoint >= 0 && (reverse ? arr[insertPoint] < key : arr[insertPoint] > key)) {
      arr[insertPoint + 1] = arr[insertPoint];
      insertPoint -= 1;
    }

    arr[insertPoint + 1] = key;
  }

  return arr;
}

assertEqualArrays(insertSort([3, 1, 7, 2, 1, 9]), [1, 1, 2, 3, 7, 9]);
assertEqualArrays(insertSort([3, 1, 7, 2, 1, 9], true), [9, 7, 3, 2, 1, 1]);
