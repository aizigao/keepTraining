
# @lc app=leetcode.cn id=215 lang=python3
#
# [215] 数组中的第K个最大元素
#

# @lc code=start


class Solution:
    # 方法一：基于快速排序的选择方法 O(nlogn)
    # 时间复杂度：O(n) 空间 O(logn)
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pass

    # 二，堆排序
    # TODO: 明天再看，这个需要小项堆的知识，再说吧
    # 时间复杂度：O(n \log n)，建堆的时间代价是 O(n)O(n)，删除的总代价是 O(k \log n)O(klogn)，因为 k < nk<n，故渐进时间复杂为 O(n + k \log n) = O(n \log n)O(n+klogn)=O(nlogn)。
# @lc code=end
