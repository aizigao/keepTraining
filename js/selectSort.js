var test = [1, -2, 6, 3, 2, 7, 89, 23, 23, 5, 0, -12, -14];

var swapArrItem = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var getMin = arr => {
  let min = [0, arr[0]];
  for (let i in arr) {
    if (min[1] > arr[i]) {
      min = [i, arr[i]];
    }
  }
  return min[0];
};

var selectSort = arr => {
  let arrInner = arr.slice();
  let sortedArr = [];
  for (let i in arr) {
    const maxIndex = getMin(arrInner);
    const max = arrInner.splice(maxIndex, 1)[0];
    sortedArr.push(max);
  }
  return sortedArr;
};

let select2 = arrx => {
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
      // swap arr[i] arr[minIndex]
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

// console.log('select', selectSort(test))
// console.log('select2', select2(test))
//

var insertSort = arrx => {
  let arr = arrx.slice();
  let len = arr.length;
  for (var i = 1; i < len; i++) {
    var j = i - 1;
    var temp = arr[i];

    while (j > -1 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

console.log("insert", insertSort(test));

const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// console.log("quickSort", quickSort(test));
