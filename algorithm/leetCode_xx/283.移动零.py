#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] 移动零
#

# @lc code=start


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        n = len(nums)
        slow = fast = 0

        while fast < n:
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1
            fast += 1
        return nums


# @lc code=end
