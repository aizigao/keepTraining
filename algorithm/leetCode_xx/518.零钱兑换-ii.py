#
# @lc app=leetcode.cn id=518 lang=python3
#
# [518] 零钱竞换-2
#

# @lc code=start
class Solution:
    '''
    dp[i][j] 的定义如下：
    若只使用前 i 个物品（可以重复使用），当背包容量为 j 时，有 dp[i][j] 种方法可以装满背包
    '''

    def change(self, amount, coins):
        n = len(coins)
        '''
        # base case 为 dp[0][..] = 0, dp[..][0] = 1。
        d[N+1][amount+1]

        # i = 0 代表不使用任何硬币面值，这种情况下显然无法凑出任何金额；
        dp[0][..] = 0

        # j = 0 代表需要凑出的目标金额为 0，那么什么都不做就是唯一的一种凑法。
        dp[..][0] = 1
        '''
        dp = [([0] * (amount+1)) for i in range(n+1)]
        for i in range(0, n+1):
            dp[i][0] = 1

        for i in range(1, n+1):
            for j in range(1, amount+1):
                # 如果你不把这第 i 个物品装入背包，也就是说你不使用 coins[i-1] 这个面值的硬币，那么凑出面额 j 的方法数 dp[i][j] 应该等于 dp[i-1][j]，继承之前的结果。

                # 如果你把这第 i 个物品装入了背包，也就是说你使用 coins[i-1] 这个面值的硬币，那么 dp[i][j] 应该等于 dp[i][j-coins[i-1]]。

                if j - coins[i-1] >= 0:
                    dp[i][j] = dp[i-1][j] + dp[i][j - coins[i-1]]
                else:
                    dp[i][j] = dp[i-1][j]
        return dp[n][amount]


print(Solution().change(5, [1, 2, 5]))  # 4
# @lc code=end
