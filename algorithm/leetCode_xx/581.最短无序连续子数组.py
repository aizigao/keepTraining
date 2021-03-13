#
# @lc app=leetcode.cn id=581 lang=python3
#
# [581] 最短无序连续子数组
#

# @lc code=start


class Solution:
    """
    方法一：暴力 双指针
    时间复杂度：O(n^2) 。使用了两重循环。
    空间复杂度：O(1)。只使用了常数空间。
    会超时
    """

    def findUnsortedSubarray_1(self, nums: List[int]) -> int:
        n = len(nums)
        l = n
        r = 0

        for i in range(n):
            for j in range(i+1, n):
                if nums[j] < nums[i]:
                    r = max(r, j)
                    l = min(l, i)
        return r - l + 1 if r - l >= 0 else 0

    """
    方法 3：排序
    时间复杂度O(nlogn) 。排序消耗 nlogn 的时间。
    """

    def findUnsortedSubarray_2(self, nums: List[int]) -> int:
        snums = nums.copy()
        snums.sort()
        start = len(nums)
        end = 0

        for i in range(len(snums)):
            if nums[i] != snums[i]:
                start = min(start, i)
                end = max(end, i)
        return end - start + 1 if end - start >= 0 else 0

    """
    方法 4：使用栈
    时间复杂度：O(n)。需要遍历数组一遍，栈的时间复杂度也为 O(n)。
    空间复杂度：O(n)。栈的大小最大达到 n。
    """

    def findUnsortedSubarray_4(self, nums: List[int]) -> int:
        pass

    """
    双指针
    """

    def findUnsortedSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 1:
            return 0

        # 初始化左右指针
        l = n - 2
        r = 1

        c_min = nums[-1]
        c_max = nums[0]

        start = 0
        end = 0

        while l >= 0 and r < n:
            # 左到右
            if nums[l] > c_min:
                start = l
            else:
                c_min = nums[l]

            # 右到左
            if nums[r] < c_max:
                end = r
            else:
                c_max = nums[r]

            l -= 1
            r += 1
        return end - start + 1 if end - start > 0 else 0

    # 方法 5：不使用额外空间


# @lc code=end
