#
# @lc app=leetcode.cn id=11 lang=python3
#
# [11] 盛最多水的容器
#

"""
方法一：双指针
时间复杂度：O(N)，双指针总计最多遍历整个数组一次。
空间复杂度：O(1)，只需要额外的常数级别的空间。
https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/
"""

# @lc code=start


class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height)-1

        ans = 0

        # l == r时，值是0, l<r就好了
        while l < r:
            area = min(height[l], height[r]) * (r-l)
            ans = max(ans, area)

            # 这一步 重要
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return ans


# @lc code=end
