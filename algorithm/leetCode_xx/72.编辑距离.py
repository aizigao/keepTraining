#
# @lc app=leetcode.cn id=72 lang=python3
#
# [72] 编辑距离
#


# @lc code=start
class Solution:
    '''
    暴力解法
    '''
    def minDistance1(self, w1: str, w2: str) -> int:
        '''
        返回s1[0...i] 和 s2[0..j]的最小编辑距离
        '''
        def dp(s1, i, s2, j):
            # base case
            # s1 或 s2 走完时
            if i == -1:
                return j + 1
            if j == -1:
                return i + 1

            if s1[i] == s2[j]:
                # skip
                # 本来就相等，不需要任何操作
                # s1[0..i] 和 s2[0..j] 的最小编辑距离等于
                # s1[0..i-1] 和 s2[0..j-1] 的最小编辑距离
                # 也就是说 dp(i, j) 等于 dp(i-1, j-1)
                return dp(s1, i - 1, s2, j - 1)

            return min(
                dp(s1, i, s2, j - 1) + 1,  # 插入
                dp(s1, i - 1, s2, j) + 1,  # 删除
                dp(s1, i - 1, s2, j - 1) + 1,  # 替换
            )

        m = len(w1)
        n = len(w2)

        # i，j 初始化指向最后一个索引
        return dp(w1, m - 1, w2, n - 1)

    #
    '''
    add memo
    '''

    def minDistance2(self, w1, w2):
        '''
        返回s1[0...i] 和 s2[0..j]的最小编辑距离
        '''
        def dp(s1, i, s2, j):
            nonlocal memo

            # base case
            # s1 或 s2 走完时
            if i == -1:
                return j + 1
            if j == -1:
                return i + 1

            if memo[i][j]:
                return memo[i][j]

            if s1[i] == s2[j]:
                # skip
                # 本来就相等，不需要任何操作
                # s1[0..i] 和 s2[0..j] 的最小编辑距离等于
                # s1[0..i-1] 和 s2[0..j-1] 的最小编辑距离
                # 也就是说 dp(i, j) 等于 dp(i-1, j-1)
                memo[i][j] = dp(s1, i - 1, s2, j - 1)
            else:
                memo[i][j] = min(
                    dp(s1, i, s2, j - 1) + 1,  # 插入
                    dp(s1, i - 1, s2, j) + 1,  # 删除
                    dp(s1, i - 1, s2, j - 1) + 1,  # 替换
                )
            return memo[i][j]

        m = len(w1)
        n = len(w2)

        memo = [[None for j in range(n)] for i in range(m)]

        # i，j 初始化指向最后一个索引
        return dp(w1, m - 1, w2, n - 1)

    '''
    dp
    '''

    def minDistance(self, s1, s2):
        m = len(s1)
        n = len(s2)
        dp = [[n for j in range(n + 1)] for i in range(m + 1)]

        for i in range(m + 1):
            dp[i][0] = i
        for j in range(n + 1):
            dp[0][j] = j

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if s1[i - 1] == s2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = min(
                        dp[i - 1][j] + 1,  # 删除
                        dp[i][j - 1] + 1,  # 添加
                        dp[i - 1][j - 1] + 1,  # 替换
                    )
        return dp[m][n]


# print(Solution().minDistance("teacher", "attache"))

# @lc code=end
