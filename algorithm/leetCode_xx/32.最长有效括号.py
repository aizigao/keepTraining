#
# @lc app=leetcode.cn id=32 lang=python3
#
# [32] 最长有效括号
#


# @lc code=start
class Solution:
    # 方法一： DP
    def longestValidParentheses(self, s: str) -> int:
        maxans = 0
        size = len(s)
        dp = [0] * size

        for i in range(1, size):
            if s[i] == ')':
                if s[i - 1] == '(':
                    dp[i] = (dp[i - 2] if i >= 2 else 0) + 2
                elif i - dp[i - 1] > 0 and s[i - dp[i - 1] - 1] == '(':
                    dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] if
                                         (i - dp[i - 1]) >= 2 else 0) + 2
            maxans = max(maxans, dp[i])
        return maxans


# @lc code=end
