#
# @lc app=leetcode.cn id=322 lang=python3
#
# [322] 零钱兑换
#

# @lc code=start


class Solution:
    # 方法一：记忆化搜索
    # F(S)=F(S−C)+1
    def coinChange_1(self, coins, amount):
        @functools.lru_cache(amount)
        def dp(rem):
            if rem < 0:
                return -1
            if rem == 0:
                return 0
            mini = int(1e9)
            for coin in coins:
                res = dp(rem - coin)
                if res >= 0 and res < mini:
                    mini = res + 1
            return mini if mini < int(1e9) else -1

        if amount < 1:
            return 0
        return dp(amount)

    def coinChange(self, coins, amount):
        # 新建一个长度为 amount+1的数组
        dp = [float('inf')] * (amount+1)
        dp[0] = 0

        for coin in coins:
            for x in range(coin, amount+1):
                dp[x] = min(dp[x], dp[x-coin] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1


# @lc code=end
# -----
if __name__ == '__main__':
    print(Solution().coinChange([10, 5, 1], 15))
