#
# @lc app=leetcode.cn id=739 lang=python3
#
# [739] 每日温度
#

# @lc code=start


class Solution:
    # 一： 暴力 看没懂, 再一个
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        n = len(T)
        ans = [0] * n
        next = dict()
        big = 1e9
        for i in range(n - 1, -1, -1):
            warmer_index = -1
            for t in range(T[i] + 1, 102):
                warmer_index = min(next.get(t, big))

            if warmer_index != big:
                ans[i] = warmer_index - i
            next[T[i]] = i
        return ans
    # 单调栈 TODO:


# @lc code=end
