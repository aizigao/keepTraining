#
# @lc app=leetcode.cn id=309 lang=python3
#
# [309] 最佳买卖股票时机含冷冻期
#

# @lc code=start


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        n = len(prices)
        f = [[0, 0, 0] for _ in range(n)]

        # 0 有股票
        # 1 冻结
        # 2 没有冻结

        # -- 初始化第一天, 最大收益
        f[0][0] = -prices[0]
        f[0][1] = 0
        f[0][2] = 0

        for i in range(1, n):
            price = prices[i]

            # 有股票情况, 1. 前一天已有， 2. 前一天没有而冻结
            f[i][0] = max(f[i-1][0], f[i-1][2] - price)

            # 变冻结, 前一天卖了
            f[i][1] = f[i-1][0] + price

            # 没有冻结, 都可以，但是有股票时是没有收益的
            f[i][2] = max(f[i-1][1], f[i-1][2])
        return max(f[n-1][1], f[n-1][2])

    # 二 空间优化, 当前只有前一天有关
    def maxProfit_2(self, prices: List[int]) -> int:
        if not prices:
            return 0

        n = len(prices)
        f0, f1, f2 = -prices[0], 0, 0
        for i in range(1, n):
            newf0 = max(f0, f2 - prices[i])
            newf1 = f0 + prices[i]
            newf2 = max(f1, f2)
            f0, f1, f2 = newf0, newf1, newf2

        return max(f1, f2)


# @lc code=end
