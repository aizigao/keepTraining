#
# @lc app=leetcode.cn id=1011 lang=python3
#
# [1011] 在 D 天内送达包裹的能力
#

# @lc code=start
'''
// 定义：当运载能力为 x 时，需要 f(x) 天运完所有货物
// f(x) 随着 x 的增加单调递减
'''


def f(weights, x):
    days = 0
    n = len(weights)
    i = 0

    while i < n:
        cap = x

        while i < n:
            if cap >= weights[i]:
                cap -= weights[i]
            else:
                break
            i += 1
        days += 1
    return days


class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l = 0
        # 开区间额外加1
        r = 1
        for w in weights:
            l = max(l, w)
            r += w

        while l < r:
            mid = l + (r - l) // 2

            if f(weights, mid) <= days:
                r = mid
            else:
                l = mid + 1
        return l


# @lc code=end
