#
# @lc app=leetcode.cn id=46 lang=python3
#
# [46] 全排列
#

# @lc code=start


"""
O(n*n!) / O(n)
"""


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []

        def backtrack(idx):
            if idx >= n:
                res.append(nums[:])
                return

            for i in range(idx, n):
                nums[idx], nums[i] = nums[i], nums[idx]
                backtrack(idx+1)
                nums[i], nums[idx] = nums[idx], nums[i]

        backtrack(0)
        return res

# @lc code=end
