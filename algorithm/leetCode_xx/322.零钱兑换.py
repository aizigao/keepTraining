#
# @lc app=leetcode.cn id=322 lang=python3
#
# [322] 零钱兑换
#

# @lc code=start


class Solution:
    '''
    暴力
    '''
    def coinChange_0(self, coins, amount):
        # // base case
        if amount == 0:
            return 0
        if amount < 0:
            return -1

        res = float('inf')

        for coin in coins:
            subP = self.coinChange(coins, amount - coin)
            # 如果无解
            if subP == -1:
                continue
            # 做选择
            res = min(res, subP + 1)
        return res if res != float('inf') else -1

    # 方法一：记忆化搜索
    # F(S)=F(S−C)+1
    '''
    长度为 k
    本身复杂度 O(k)
    调用次数: 等于状态数 O(n)
    O(kn) --> O(n)
    '''

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
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0

        # 便利所有状态
        for coin in coins:
            # 求选择的最小值
            # i - coin < 0 无解跳过
            for x in range(coin, amount + 1):
                dp[x] = min(dp[x], dp[x - coin] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1


# @lc code=end
# -----
if __name__ == '__main__':
    print(Solution().coinChange([10, 5, 1], 15))
