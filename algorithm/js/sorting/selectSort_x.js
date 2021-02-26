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
    const minIndex = getMin(arrInner);
    const min = arrInner.splice(minIndex, 1)[0];
    sortedArr.push(min);
  }
  return sortedArr;
};

console.log(selectSort(test));
