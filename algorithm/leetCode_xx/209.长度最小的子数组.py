#
# @lc app=leetcode.cn id=209 lang=python3
#
# [209] 长度最小的子数组
#


# @lc code=start
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if not nums:
            return 0
        l = r = 0
        sum = 0
        rst_size = float('inf')

        while r < len(nums):
            num = nums[r]
            r += 1

            sum += num

            while sum >= target:
                rst_size = min(rst_size, r - l)
                d = nums[l]
                l += 1
                sum -= d

        return rst_size if rst_size != float('inf') else 0


# @lc code=end
