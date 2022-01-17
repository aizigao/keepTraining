#
# @lc app=leetcode.cn id=152 lang=python3
#
# [152] 乘积最大子数组
#


# @lc code=start
class Solution:
    def maxProduct(self, nums):

        #  int maxF = nums[0], minF = nums[0], ans = nums[0];
        max_n = nums[0]
        min_n = nums[0]
        ans = nums[0]
        size = len(nums)

        for i in range(1, size):
            mx = max_n
            mn = min_n

            max_n = max(mx * nums[i], nums[i], mn * nums[i])
            min_n = min(mn * nums[i], nums[i], mx * nums[i])
            ans = max(max_n, ans)
        return ans


# @lc code=end
