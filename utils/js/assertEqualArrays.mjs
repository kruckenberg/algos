export function assertEqualArrays(first, second) {
  if (first.length !== second.length) {
    throw Error('Arrays not same length');
  }

  for (const [idx, el] of first.entries()) {
    if (el !== second[idx]) {
      throw Error(`${el} does not match ${second[idx]} at index ${idx}`);
    }
  }

  return true;
}
