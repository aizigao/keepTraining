#
# @lc app=leetcode.cn id=528 lang=python3
#
# [528] 按权重随机选择
#

# @lc code=start

# from random import random

import random


def left_bound(nums, target):
    if not nums:
        return -1
    l = 0
    r = len(nums)  # 做 [0, end) 搜索

    while l < r:  # [start, end)
        mid = l + (r - l) // 2
        if nums[mid] == target:
            r = mid
        elif nums[mid] < target:
            l = mid + 1
        elif nums[mid] > target:
            r = mid  # 「搜索区间」是 [left, right) 左闭右开
    return l


class Solution:
    def __init__(self, w: List[int]):
        n = len(w)
        preSum = [0] * (n + 1)

        for i in range(1, n + 1):
            preSum[i] = preSum[i - 1] + w[i - 1]
        self.preSum = preSum

    def pickIndex(self) -> int:
        preSum = self.preSum
        n = len(preSum)
        #  在闭区间 [1, preSum[n - 1]] 中随机选择一个数字
        target = random.randint(1, preSum[n - 1])

        # 别忘了前缀和数组 preSum 和原始数组 w 有一位索引偏移
        return left_bound(preSum, target) - 1


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
# @lc code=end
