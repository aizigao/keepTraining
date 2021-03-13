#
# @lc app=leetcode.cn id=221 lang=python3
#
# [221] 最大正方形
#

# @lc code=start


class Solution:
    # O(m*n) / O(m*n)
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if len(matrix) == 0 or len(matrix[0]) == 0:
            return 0

        maxSide = 0
        rows = len(matrix)
        columns = len(matrix[0])
        dp = [([0] * columns) for _ in range(rows)]

        for i in range(rows):
            for j in range(columns):
                #  -- 初始化
                if matrix[i][j] == '1':
                    if i == 0 or j == 0:
                        dp[i][j] = 1
                    else:
                        dp[i][j] = min(dp[i - 1][j], dp[i]
                                       [j - 1], dp[i - 1][j - 1]) + 1
                    maxSide = max(maxSide, dp[i][j])

        return maxSide * maxSide


# @lc code=end
