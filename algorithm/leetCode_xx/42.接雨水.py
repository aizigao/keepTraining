#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] 接雨水
#


# @lc code=start
class Solution:
    '''
    方法一: dp
    '''
    def trap(self, height: List[int]) -> int:
        pass

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


# @lc code=end
