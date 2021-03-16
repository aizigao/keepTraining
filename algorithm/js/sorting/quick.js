function quickSort(arr) {
  const n = arr.length;
  // basic
  if (n <= 1) {
    return arr;
  }

  // ---
  const pivotIdx = Math.floor(n / 2);
  const pivot = arr[pivotIdx];
  const l = [];
  const r = [];

  for (let i = 0; i < n; i++) {
    if (i === pivotIdx) {
      continue;
    }
    if (arr[i] < pivot) {
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }

  return [...quickSort(l), pivot, ...quickSort(r)];
}

console.log(quickSort([1, 23, 66, 33, 6, 66]));
console.log(quickSort([45, 66, 2, 22, 77, 22]));
