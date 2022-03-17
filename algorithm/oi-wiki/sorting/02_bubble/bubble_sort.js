/*******************************
具体算法描述如下：

<1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
<2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
<3>.针对所有的元素重复以上的步骤，除了最后一个；
<4>.重复步骤1~3，直到排序完成。


时间O(n^2) 空间O(1)
****************************/

var test = [23, 45, 56, 67, 78, 78, 78, 78232, 1, 45, 56];

function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(test));
