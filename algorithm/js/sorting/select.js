const getMinIdx = (arr) => {
  let minIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[minIdx] > arr[i]) {
      minIdx = i;
    }
  }
  return minIdx;
};

const selectSort = (oriArr) => {
  // copy
  let arr = [...oriArr];
  let sorted = [];

  for (let i of oriArr) {
    const minItemIdx = getMinIdx(arr);
    const minItem = arr.splice(minItemIdx, 1)[0];
    sorted.push(minItem);
  }
  return sorted;
};

let selectSort2 = (arrx) => {
  let arr = arrx.slice();
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // swap
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectSort([1, 23, 66, 33, 6, 66]));
console.log(selectSort([45, 66, 2, 22, 77, 22]));

console.log(selectSort2([1, 23, 66, 33, 6, 66]));
console.log(selectSort2([45, 66, 2, 22, 77, 22]));
