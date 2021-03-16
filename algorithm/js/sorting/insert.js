/**********************
插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
 ***************/
function insertSort(oArr) {
  if (oArr.length <= 1) {
    return oArr;
  }

  const arr = [...oArr];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let prevIdx = i - 1;
    let cur = arr[i];
    while (prevIdx >= 0 && arr[prevIdx] > cur) {
      arr[prevIdx + 1] = arr[prevIdx];
      prevIdx -= 1;
    }
    arr[prevIdx + 1] = cur;
  }
  return arr;
}

console.log(insertSort([1, 23, 66, 33, 6, 66]));
console.log(insertSort([45, 66, 2, 22, 77, 22]));
