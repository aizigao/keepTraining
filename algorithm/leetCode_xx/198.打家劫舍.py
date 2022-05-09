#
# @lc app=leetcode.cn id=198 lang=python3
#
# https://leetcode.cn/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
# [198] 打家劫舍
#


# @lc code=start
class Solution:
    '''
    dp
    每间房状态只有抢或不抢
    '''
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        n = len(nums)

        if n == 1:
            return nums[0]

        dp = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
        return dp[n - 1]

    '''
    dp 优化
    '''

    def rob2(self, nums: List[int]) -> int:
        pass


# @lc code=end
