function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivot, 1)[0];

  var left = [];
  var right = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

var arr = [2, 23, 43, 4234, 235, 4351, 34, 321, 56, 231];

console.group("-----------");
console.time("2.快速排序耗时");
console.log(quickSort(arr));
console.timeEnd("2.快速排序耗时");
console.groupEnd("-----------");
