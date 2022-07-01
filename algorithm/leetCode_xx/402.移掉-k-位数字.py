#
# @lc app=leetcode.cn id=402 lang=python3
#
# [402] 移掉 K 位数字
#
'''
两个相同位数的数字大小关系取决于第一个不同的数的大小
改为保留 len(num) - k 个元素
'''


# @lc code=start
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []

        remain = len(num) - k

        for digit in num:
            # 最近加入的元素 大于当前，则移除
            while k and stack and stack[-1] > digit:
                stack.pop()
                k -= 1
            stack.append(digit)

        return ''.join(stack[:remain]).lstrip('0') or '0'


# @lc code=end
