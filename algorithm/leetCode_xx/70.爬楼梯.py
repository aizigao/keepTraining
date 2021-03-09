#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] 爬楼梯
#

"""
方法一：动态规划
f(x)=f(x−1)+f(x−2)

它意味着爬到第 xx 级台阶的方案数是爬到第 x - 1 级台阶的方案数和爬到第 x - 2 级台阶的方案数的和。很好理解，因为每次只能爬 1 级或 2 级，所以 f(x) 只能从 f(x - 1) 和 f(x - 2) 转移过来，而这里要统计方案总数，我们就需要对这两项的贡献求和。

以上是动态规划的转移方程，下面我们来讨论边界条件。我们是从第 0 级开始爬的，所以从第 0 级爬到第 0 级我们可以看作只有一种方案，即 f(0) = 1；从第 0 级到第 1 级也只有一种方案，即爬一级，f(1) = 1。这两个作为边界条件就可以继续向后推导出第 nn 级的正确结果。我们不妨写几项来验证一下，根据转移方程得到 f(2) = 2f(2)=2，f(3) = 3f(3)=3，f(4) = 5f(4)=5，……，我们把这些情况都枚举出来，发现计算的结果是正确的。

我们不难通过转移方程和边界条件给出一个时间复杂度和空间复杂度都是 O(n)O(n) 的实现，但是由于这里的 f(x)f(x) 只和 f(x - 1)f(x−1) 与 f(x - 2)f(x−2) 有关，所以我们可以用「滚动数组思想」把空间复杂度优化成 O(1)O(1)

方法二：矩阵快速幂 TODO: 这个不看了
"""
# @lc code=start


class Solution:
    def climbStairs(self, n: int) -> int:
        #   p q r
        # ->  p q r
        p, q, r = 0, 0, 1

        for i in range(n):
            p = q
            q = r
            r = p+q
        return r


# @lc code=end
