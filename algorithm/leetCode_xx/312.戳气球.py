#
# @lc app=leetcode.cn id=312 lang=python3
#
# [312] 戳气球
# https://leetcode-cn.com/problems/burst-balloons/solution/chuo-qi-qiu-by-leetcode-solution/
#

# @lc code=start
from functools import lru_cache


class Solution:
    '''
    一，记忆化搜索
    我们观察戳气球的操作，发现这会导致两个气球从不相邻变成相邻，使得后续操作难以处理。于是我们倒过来看这些操作，将全过程看作是每次添加一个气球。

    时间: O(n^3) 其中 n 是气球数量。区间数为 n^2 ，区间迭代复杂度为 O(n)，最终复杂度为 O(n^2 * n) 
    空间：O(n^2) 其中 n 是气球数量。缓存大小为区间的个数。
    '''
    def maxCoins(self, nums: List[int]) -> int:

        n = len(nums)
        val = [1] + nums + [1]

        @lru_cache(None)
        def solve(
            left,
            right,
        ):
            if left >= right - 1:
                return 0
            best = 0

            for i in range(left + 1, right):
                total = val[left] * val[i] * val[right]
                total += solve(left, i) + solve(i, right)

                best = max(best, total)
            return best

        return solve(0, n + 1)
    '''
    TODO: dp
    '''


# @lc code=end
