#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

# @lc code=start

"""
显然，如果我们真的在买卖股票，我们肯定会想：如果我是在历史最低点买的股票就好了！太好了，在题目中，我们只要用一个变量记录一个历史最低价格 minprice
那么我们在第 i 天卖出股票能得到的利润就是 prices[i] - minprice。
"""


class Solution:
    # 暴力，会超时
    # def maxProfit(self, prices: List[int]) -> int:
    #     ans = 0
    #     for i in range(len(prices)):
    #         for j in range(i + 1, len(prices)):
    #             ans = max(ans, prices[j] - prices[i])
    #     return ans

    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            max_profit = max(max_profit, price - min_price)
            min_price = min(min_price, price)
        return max_profit


# @lc code=end
