#
# @lc app=leetcode.cn id=300 lang=python3
#
# [300] 最长递增子序列
#


# @lc code=start
class Solution:
    '''
    dp[i] -> 以 num[i]这个数结尾的 最长递增序列长度
    '''
    def lengthOfLIS_1(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        dp = [1] * n

        for i in range(n):
            # 找到i之前, 比nums[i]小的数
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[j] + 1, dp[i])

        for i in range(n):
            res = max(res, dp[i])
        return res


# @lc code=end
