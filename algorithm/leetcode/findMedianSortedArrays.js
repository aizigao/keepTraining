/*************************************************
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。 --> 二分？

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

 ******************************/

/***********
 * O(log(m+n)) -> 是log一定就是说二分了 --> 在两个排序数组中进行二分查找 -->
 * 在两个数组中找第k个小的数
 *
 *
 * 首先在两个数组中分别找出第 k/2 大的数，再比较这两个第 k/2 大的数，这里假设两个数组为 A ，B。
 *
 * 那么比较结果会有下面几种情况：
 *  - A[k/2] = B[k/2],那么第 k 大的数就是 A[k/2]
 *  - A[k/2] > B[k/2],那么第 k 大的数肯定在 A[0:k/2+1] 和 B[k/2:] 中，这样就将原来的所有数的总和减少到一半了，再在这个范围里面找第 k/2 大的数即可，这样也达到了二分查找的区别了。
 *  - A[k/2] < B[k/2]，那么第 k 大的数肯定在 B[0:k/2+1]和 A[k/2:] 中，同理在这个范围找第 k/2 大的数就可以了。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  // 中间的两个数
  let left = (n + m + 1) / 2;
  let right = (n + m + 2) / 2;

  return (
    //--
    (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) +
      getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) *
    0.5
  );
};

const getKth = (nums1, start1, end1, nums2, start2, end2, k) => {
  let len1 = end1 - start1 + 1;
  let len2 = end2 - start2 + 1;
  //让 len1 的长度小于 len2，这样就能保证如果有数组空了，一定是 len1
  if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
  if (len1 == 0) return nums2[start2 + k - 1];
  if (k == 1) return Math.min(nums1[start1], nums2[start2]);
  let i = start1 + Math.min(len1, k / 2) - 1;
  let j = start2 + Math.min(len2, k / 2) - 1;

  if (nums1[i] > nums2[j]) {
    return getKth(
      nums1,
      start1,
      end1,
      nums2,
      j + 1,
      end2,
      k - (j - start2 + 1)
    );
  } else {
    return getKth(
      nums1,
      i + 1,
      end1,
      nums2,
      start2,
      end2,
      k - (i - start1 + 1)
    );
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); //2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
