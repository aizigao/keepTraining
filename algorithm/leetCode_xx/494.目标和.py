#
# @lc app=leetcode.cn id=494 lang=python3
#
# [494] 目标和
#


# @lc code=start
class Solution:
    # backtrack O(2^n) O(n) 超时
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        count = 0
        size = len(nums)

        def backtrack(index, sum):
            nonlocal count
            if index == size:
                if sum == target:
                    count += 1
            else:
                backtrack(index + 1, sum + nums[index])
                backtrack(index + 1, sum - nums[index])

        backtrack(0, 0)
        return count


# @lc code=end
