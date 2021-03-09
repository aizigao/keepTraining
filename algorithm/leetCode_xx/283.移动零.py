#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] 移动零
#

# @lc code=start


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)

        l, r = 0, 0

        while r < n:
            while nums[r] != 0:
                nums[r], nums[l] = nums[l], nums[r]
                l += 1

            r += 1
        return nums


# @lc code=end
