# @lc app=leetcode.cn id=215 lang=python3
#
# [215] 数组中的第K个最大元素
#

# @lc code=start


class Solution:
    # 方法一：基于快速排序的选择方法 O(nlogn)
    # 时间复杂度：O(n) 空间 O(logn)
    def findKthLargest(self, nums: List[int], k: int) -> int:
        l = 0
        r = len(nums) - 1

        # 转化第k大元素
        k = len(nums) - k

        while l <= r:
            mid = self.partition(nums, l, r)
            if mid < k:
                l = mid + 1
            elif mid > k:
                r = mid - 1
            else:
                return nums[mid]
        return -1

    def partition(self, nums, l, r):
        pivot = random.randint(l, r)
        nums[pivot], nums[r] = nums[r], nums[pivot]
        i = l - 1
        for j in range(l, r):
            if nums[j] < nums[r]:
                i += 1
                nums[j], nums[i] = nums[i], nums[j]
        i += 1
        nums[i], nums[r] = nums[r], nums[i]
        return i

    # 二，堆排序
    # 小项堆 binheap
    def findKthLargest2(self, nums: List[int], k: int) -> int:
        pass


# @lc code=end
