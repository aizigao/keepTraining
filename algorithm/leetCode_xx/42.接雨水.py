#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] 接雨水
#

# @lc code=start


class Solution:
    '''
    方法一: dp

    时间: O(n)
    空: O(n)
    
    '''
    def trap1(self, height: List[int]) -> int:
        n = len(height)
        ans = 0

        # ---------
        leftMax = [0] * n
        leftMax[0] = height[0]
        # -
        rightMax = [0] * n
        rightMax[n - 1] = height[n - 1]

        for i in range(1, n):
            leftMax[i] = max(leftMax[i - 1], height[i])

        for i in range(n - 2, -1, -1):
            rightMax[i] = max(rightMax[i + 1], height[i])

        for i in range(n):
            ans += min(leftMax[i], rightMax[i]) - height[i]
        return ans

    '''
    '''
    '''
    '''
    '''
    方法三: 双指针

    下标 i 处能接的雨水由 leftMax[i] 与 rightMax[i] 的最小值决定
    时：O(n)
    空: O(1)
    '''

    def trap3(self, height: List[int]) -> int:
        ans = 0
        left, right = 0, len(height) - 1
        leftMax, rightMax = 0, 0

        while left < right:
            leftMax = max(leftMax, height[left])
            rightMax = max(rightMax, height[right])

            if height[left] < height[right]:
                ans += leftMax - height[left]
                left += 1
            else:
                ans += rightMax - height[right]
                right -= 1
        return ans

    '''
    方法二：单调栈
    维护一个单调栈，单调栈存储的是下标，满足从栈底到栈顶的下标对应的数组 height 中的元素递减。

    从左到右遍历数组，遍历到下标 i 时，
    如果栈内至少有两个元素，记栈顶元素为 top，top 的下面一个元素是 left，
    则一定有 height[left] >= height[top] 
    如果 height[i]>height[top]，则得到一个可以接雨水的区域，该区域的宽度是 i-left−1，高度是 min(height[left],height[i])−height[top]，根据宽度和高度即可计算得到该区域能接的雨水量。
    为了得到 left，需要将 top 出栈。在对 top 计算能接的雨水量之后，left 变成新的 top，重复上述操作，直到栈变为空，或者栈顶下标对应的 height 中的元素大于或等于 height[i]。
    在对下标 i 处计算能接的雨水量之后，将 i 入栈，继续遍历后面的下标，计算能接的雨水量。遍历结束之后即可得到能接的雨水总量。


    时: O(n)
    空: O(n)
    '''

    def trap(self, height: List[int]) -> int:
        ans = 0
        stack = []

        for i, h in enumerate(height):
            while stack and h > height[stack[-1]]:
                top = stack.pop()

                if not stack:
                    break

                left = stack[-1]

                curW = i - left - 1
                curH = min(height[i], height[left]) - height[top]
                ans += curW * curH

            stack.append(i)
        return ans


# @lc code=end
