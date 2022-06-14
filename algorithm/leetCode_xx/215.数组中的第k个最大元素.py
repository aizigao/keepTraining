# @lc app=leetcode.cn id=215 lang=python3
#
# [215] 数组中的第K个最大元素
#

# @lc code=start


class Solution:
    # 方法一：基于快速排序的选择方法 O(nlogn)
    # 时间复杂度：O(n) 空间 O(logn)
    '''
    partition 函数执行的次数是 logN
    ，每次输入的数组大小缩短一半。 所以总的时间复杂度为：
    N + N/2 + N/4 + N/8 + ... + 1 = 2N = O(N)
    '''
    def findKthLargest(self, nums: List[int], k: int) -> int:
        l = 0
        r = len(nums) - 1
        # 转为取 第k个索引元素
        k = r - k + 1

        while l <= r:
            mid = self.partition(nums, l, r)
            if mid > k:
                r = mid - 1
            elif mid < k:
                l = mid + 1
            else:
                return nums[mid]
        return -1

    def partition(self, nums, l, r):
        pivot = random.randint(l, r) # shuffle
        nums[pivot], nums[r] = nums[r], nums[pivot]

        i = l - 1
        for j in range(l, r):
            if nums[j] < nums[r]:
                i += 1
                nums[j], nums[i] = nums[i], nums[j]
        i += 1
        nums[r], nums[i] = nums[i], nums[r]

        return i

    # 二，堆排序
    # 小项堆 binheap
    def findKthLargest2(self, nums: List[int], k: int) -> int:
        pass


# @lc code=end
