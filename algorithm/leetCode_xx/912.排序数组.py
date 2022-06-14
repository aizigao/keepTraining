#
# @lc app=leetcode.cn id=912 lang=python3
#
# [912] 排序数组
#

# @lc code=start


class Solution:
    def randomized_partition(self, nums, l, r):
        pivot = random.randint(l, r)
        nums[r], nums[pivot] = nums[pivot], nums[r]

        i = l - 1
        for j in range(l, r):
            if nums[j] < nums[r]:
                i += 1
                nums[i], nums[j] = nums[j], nums[i]
        i += 1
        nums[r], nums[i] = nums[i], nums[r]
        return i

    def randomized_quicksort(self, nums, l, r):
        if l >= r:
            return

        mid = self.randomized_partition(nums, l, r)
        self.randomized_partition(nums, l, mid - 1)
        self.randomized_partition(nums, mid + 1, r)

    def sortArray(self, nums: List[int]) -> List[int]:
        self.randomized_quicksort(nums, 0, len(nums) - 1)
        return nums


# @lc code=end
