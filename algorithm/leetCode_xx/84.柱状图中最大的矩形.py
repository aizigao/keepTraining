#
# @lc app=leetcode.cn id=84 lang=python3
#
# [84] 柱状图中最大的矩形
#


# @lc code=start
class Solution:
    '''
    方法一: 单调栈
    '''
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)

        left, right = [0] * n, [0] * n
        mono_stack = []

        for i in range(n):
            while mono_stack and heights[mono_stack[-1]] >= heights[i]:
                mono_stack.pop()
            left[i] = mono_stack[-1] if mono_stack else -1
            mono_stack.append(i)

        mono_stack = []
        for i in range(n - 1, -1, -1):
            while mono_stack and heights[mono_stack[-1]] >= heights[i]:
                mono_stack.pop()
            right[i] = mono_stack[-1] if mono_stack else n
            mono_stack.append(i)
        ans = 0

        if n > 0:
            for i in range(n):
                ans = max((right[i] - left[i] - 1) * heights[i], ans)
        return ans


# @lc code=end
