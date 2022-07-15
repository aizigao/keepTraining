#
# @lc app=leetcode.cn id=931 lang=python3
#
# [931] 下降路径最小和
#


# @lc code=start
class Solution:
    '''
    由项向下
    '''
    def minFallingPathSum1(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        res = float('inf')

        # 备忘录里的值初始化为 66666
        self.memo = [[6666] * n] * n

        # 终点可能在 matrix[n-1] 行的任意一列
        for j in range(n):
            res = min(res, self.dp(matrix, n - 1, j))
        return res

    def dp(self, matrix, i, j):
        # 索引处理
        if i < 0 or j < 0 or i >= len(matrix) or j >= len(matrix):
            return 99999

        # base
        if i == 0:
            return matrix[0][j]

        # memo

        if self.memo[i][j] != 6666:
            return self.memo[i][j]

        # 状态转移

        self.memo[i][j] = matrix[i][j] + min(self.dp(matrix, i - 1, j),
                                             self.dp(matrix, i - 1, j - 1),
                                             self.dp(matrix, i - 1, j + 1))
        return self.memo[i][j]

    # 自底向上
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        n = len(matrix)
        '''
        dp数组 0 左右填充为0
        '''
        dp = [[99999] * (n + 2) for i in range(n)]

        # // base case
        for j in range(n):
            k = j + 1
            dp[0][k] = matrix[0][j]

        for i in range(1, n):
            for j in range(n):
                k = j + 1
                dp[i][k] = min(dp[i - 1][k - 1], dp[i - 1][k],
                               dp[i - 1][k + 1]) + matrix[i][j]
        res = float('inf')
        for i in range(1, n + 1):
            res = min(dp[n - 1][i], res)
        return res


# @lc code=end
