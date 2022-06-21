#
# @lc app=leetcode.cn id=704 lang=python3
#
# [704] 二分查找
#


# @lc code=start
class Solution:
    def search1(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1
        '''
        为初始化 right 的赋值是 nums.length - 1，即最后一个元素的索引，而不是 nums.length。

        这二者可能出现在不同功能的二分查找中，区别是：前者相当于两端都闭区间 [left, right]，后者相当于左闭右开区间 [left, right)，因为索引大小为 nums.length 是越界的。


        while(left <= right) 的终止条件是 left == right + 1


        while(left < right) 的终止条件是 left == right
        '''
        while l <= r:
            mid = l + (r - l) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                r = mid - 1
            elif nums[mid] < target:
                l = mid + 1
        return -1

    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1

        while l < r:
            mid = l + (r - l) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                r = mid - 1
            elif nums[mid] < target:
                l = mid + 1
        return l if nums[l] == target else -1


# @lc code=end
