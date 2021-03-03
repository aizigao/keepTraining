var test = [45, 1, 5, 65, 56, 67, 3234, 6, 7878, 34, 675, 3, 2, 3];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotVal = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];

    if (ele < pivotVal) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }

  return quickSort(left).concat([pivotVal]).concat(quickSort(right));
};

console.log(quickSort(test));
