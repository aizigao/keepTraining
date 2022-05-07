#
# @lc app=leetcode.cn id=84 lang=python3
#
# [84] 柱状图中最大的矩形
#


# @lc code=start
class Solution:
    '''
    方法一: 单调栈
    时间复杂度：O(N)
    空间复杂度：O(N)
    '''
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        if n == 0:
            return 0

        ans = 0
        left, right = [0] * n, [0] * n

        # 左侧单调栈
        stack = []
        for i in range(n):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            left[i] = stack[-1] if stack else -1
            stack.append(i)

        # 右侧单调栈
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)

        for i in range(n):
            ans = max(ans, (right[i] - left[i] - 1) * heights[i])
        return ans


# @lc code=end
