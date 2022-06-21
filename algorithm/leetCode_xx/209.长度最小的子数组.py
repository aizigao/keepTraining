#
# @lc app=leetcode.cn id=209 lang=python3
#
# [209] 长度最小的子数组
#


# @lc code=start
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = r = 0
        rstSize = float('inf')
        sum = 0

        while r < len(nums):
            num = nums[r]
            r += 1

            sum += num

            while sum >= target:
                # 满足条件
                rstSize = min(rstSize, r - l)
                d = nums[l]
                sum -= d
                l += 1
        if rstSize == float('inf'):
            return 0
        return rstSize


# @lc code=end
