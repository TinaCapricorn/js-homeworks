function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  return arr1.every((val, i) => val == arr2[i]);
}

function advancedFilter(arr) {
  return arr
    .filter((val) => val > 0)
    .filter((val) => val % 3 == 0)
    .map((val) => val * 10);
}
