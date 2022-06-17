#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] 删除有序数组中的重复项
#


# @lc code=start
class Solution:
    '''
    我们让慢指针 slow 走在后面，快指针 fast 走在前面探路，找到一个不重复的元素就赋值给 slow 并让 slow 前进一步

    nums[0...slow] 为无重复元素
    '''
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        slow = fast = 0

        while fast < len(nums):
            if nums[fast] != nums[slow]:
                slow += 1
                # 数据在 nums[0...slow] 内
                nums[slow] = nums[fast]
            fast += 1
        return slow + 1


# @lc code=end
