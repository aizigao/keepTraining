/**********************
插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
 ***************/

var test = [45, 1, 5, 65, 56, 67, 3234, 6, 7878, 34, 675, 3, 2, 3];

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var val = array[i];
    var j = i - 1;

    while (j >= 0 && array[j] > val) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = val;
  }
  return array;
}

console.log(insertionSort(test));
