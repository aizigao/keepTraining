#
# @lc app=leetcode.cn id=494 lang=python3
#
# [494] 目标和
#


# @lc code=start
class Solution:
    # backtrack O(2^n) O(n) 超时
    def findTargetSumWays01(self, nums: List[int], target: int) -> int:
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

    # -- 方法二 动态规划
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        sum = 0
        for num in nums:
            sum += num

        diff = sum - target

        if diff < 0 or diff % 2 != 0:
            return 0

        n = len(nums)
        neg = int(diff / 2)

        dp = [[0 for j in range(neg + 1)] for i in range(n + 1)]
        dp[0][0] = 1

        for i in range(1, n + 1):
            num = nums[i - 1]
            for j in range(0, neg + 1):
                dp[i][j] = dp[i - 1][j]

                if j >= num:
                    dp[i][j] += dp[i - 1][j - num]
        return dp[n][neg]


# @lc code=end
