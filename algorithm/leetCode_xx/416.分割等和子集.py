#
# @lc app=leetcode.cn id=416 lang=python3
#
# [416] 分割等和子集
#

# @lc code=start
class Solution:
    '''
    我们可以先对集合求和，得出 sum，把问题转化为背包问题：
    给一个可装载重量为 sum / 2 的背包和 N 个物品，每个物品的重量为 nums[i]。现在让你装物品，是否存在一种装法，能够恰好将背包装满？
    '''

    def canPartition1(self, nums):
        sum = 0
        for i in nums:
            sum += i
        if sum % 2 != 0:
            return False
        n = len(nums)
        sum = int(sum // 2)

        dp = [[False for j in range(sum + 1)] for i in range(n+1)]

        for i in range(n+1):
            dp[i][0] = True

        for i in range(1, n+1):
            for j in range(1, sum+1):
                if j - nums[i-1] < 0:
                    dp[i][j] = dp[i-1][j]
                else:
                    dp[i][j] = dp[i-1][j] or dp[i-1][j - nums[i-1]]
        return dp[n][sum]
    # 注意到 dp[i][j] 都是通过上一行 dp[i-1][..] 转移过来的，之

    def canPartition(self, nums):
        sum = 0
        for i in nums:
            sum += i
        if sum % 2 != 0:
            return False
        n = len(nums)
        sum = int(sum // 2)

        dp = [False for j in range(sum + 1)]
        dp[0] = True

        for i in range(1, n+1):
            for j in range(1, sum+1):
                if j - nums[i-1] >= 0:
                    dp[j] = dp[j] or dp[j - nums[i-1]]
        return dp[sum]


# print(Solution().canPartition([1, 5, 11, 5]))
# @lc code=end
