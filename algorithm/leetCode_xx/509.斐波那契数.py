#
# @lc app=leetcode.cn id=509 lang=python3
#
# [509] 斐波那契数
#


# @lc code=start
class Solution:
    '''
    1. 暴力 指数级
    本身复杂为 O(1)
    递归数 O(2^n)
    复杂度 O(2^n)
    '''
    def fib1(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        return self.fib(n - 1) + self.fib(n - 2)

    '''
    2. 带备忘录
    O(n)
    自顶向下
    空间换时间
    '''

    def fib1(self, n: int) -> int:
        memo = [0] * (n + 1)

        def helper(memo, n):
            if n == 0 or n == 1:
                return n
            # 已计算过
            if memo[n] != 0:
                return memo[n]
            memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
            return memo[n]

        return helper(memo, n)

    '''
    3. 自底向上
    '''

    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        dp = [0] * (n + 1)

        # base
        dp[0] = 0
        dp[1] = 1

        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]


# @lc code=end
