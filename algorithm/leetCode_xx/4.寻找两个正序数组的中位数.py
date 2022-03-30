#
# @lc app=leetcode.cn id=4 lang=python3
#
# [4] 寻找两个正序数组的中位数
#

# @lc code=start
'''
https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/


给定两个有序数组，要求找到两个有序数组的中位数，最直观的思路有以下两种：

- 使用归并的方式，合并两个有序数组，得到一个大的有序数组。大的有序数组的中间位置的元素，即为中位数。

- 不需要合并两个有序数组，只要找到中位数的位置即可。由于两个数组的长度已知，因此中位数对应的两个数组的下标之和也是已知的。维护两个指针，初始时分别指向两个数组的下标 0 的位置，每次将指向较小值的指针后移一位（如果一个指针已经到达数组末尾，则只需要移动另一个数组的指针），直到到达中位数的位置。
'''


class Solution:
    # 方案一 二分加并归
    def findMedianSortedArrays(self, nums1: List[int],
                               nums2: List[int]) -> float:
        # 取第k个数
        def getKEle(k):
            idx1, idx2 = 0, 0

            while True:
                # base
                if idx1 == m:
                    return nums2[idx2 + k - 1]
                if idx2 == n:
                    return nums1[idx1 + k - 1]
                if k == 1:
                    return min(nums1[idx1], nums2[idx2])

                nIdx1 = min(idx1 + k // 2 - 1, m - 1)
                nIdx2 = min(idx2 + k // 2 - 1, n - 1)

                povit1, povit2 = nums1[nIdx1], nums2[nIdx2]

                if povit1 <= povit2:
                    k -= nIdx1 - idx1 + 1
                    idx1 = nIdx1 + 1
                else:
                    k -= nIdx2 - idx2 + 1
                    idx2 = nIdx2 + 1

        m, n = len(nums1), len(nums2)
        totalLen = m + n

        # 共长度为奇数
        if totalLen % 2 == 1:
            return getKEle((totalLen + 1) // 2)
        else:
            return (getKEle(totalLen // 2) + getKEle(totalLen // 2 + 1)) / 2

    # 方法二 划分数组


# @lc code=end
