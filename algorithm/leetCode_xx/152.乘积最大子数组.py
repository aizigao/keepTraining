#
# @lc app=leetcode.cn id=152 lang=python3
#
# [152] 乘积最大子数组
#


# @lc code=start
class Solution:
    def maxProduct(self, nums):

        ans = max_n = min_n = nums[0]

        for i in range(1, len(nums)):
            l_max_n = max_n
            l_min_n = min_n
            n = nums[i]
            max_n = max(l_max_n * n, n, l_min_n * n)
            min_n = min(l_max_n * n, n, l_min_n * n)
            ans = max(max_n, ans)
        return ans


# @lc code=end
