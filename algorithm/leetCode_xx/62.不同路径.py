#
# @lc app=leetcode.cn id=62 lang=python3
#
# [62] 不同路径
#

# @lc code=start


class Solution:
    # 方法一：动态规划
    # f(i,j)=f(i−1,j)+f(i,j−1)
    #  f(0, j)f(0,j) 以及 f(i, 0)f(i,0) 都设置为边界条件，它们的值均为 11。
    def uniquePaths(self, m: int, n: int) -> int:
        # 第一行 和 第一列都是1
        f = [([0] * n) for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    f[i][j] = 1
                else:
                    f[i][j] = f[i - 1][j] + f[i][j - 1]
        return f[m - 1][n - 1]

    # 方法二：组合数学 不看
# @lc code=end
