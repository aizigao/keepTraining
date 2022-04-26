#
# @lc app=leetcode.cn id=221 lang=python3
#
# [221] 最大正方形
#

# @lc code=start


class Solution:
    # O(m*n) / O(m*n)
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        ans = 0
        if not matrix or not matrix[0]:
            return ans

        rows = len(matrix)
        columns = len(matrix[0])

        dp = [[0 for c in range(columns)] for r in range(rows)]

        maxSide = 0
        for r in range(rows):
            for c in range(columns):
                if matrix[r][c] == '1':
                    if r == 0 and c == 0:
                        dp[r][c] = 1
                    else:
                        dp[r][c] = min(
                            dp[r - 1][c - 1],
                            dp[r][c - 1],
                            dp[r - 1][c],
                        ) + 1
                    maxSide = max(maxSide, dp[r][c])
        return maxSide * maxSide


# @lc code=end
