#
# @lc app=leetcode.cn id=75 lang=python3
#
# [75] 颜色分类
#

# @lc code=start


class Solution:
    """
    本题是经典的「荷兰国旗问题
    """

    """
    一：单指针
    时间复杂度：O(n)，其中 n 是数组nums 的长度。
    O(1)
    """

    def sortColors(self, nums: List[int]) -> None:
        n = len(nums)
        ptr = 0

        """
        遍历两次
        """

        # 处理0
        for i in range(n):
            if nums[i] == 0:
                nums[i], nums[ptr] = nums[ptr], nums[i]
                ptr += 1
        # 处理1
        for i in range(ptr, n):
            if nums[i] == 1:
                nums[i], nums[ptr] = nums[ptr], nums[i]
                ptr += 1

    """
    二：双指针
    时间复杂度：O(n)，其中 n 是数组nums 的长度。
    O(1)
    """

    def sortColors(self, nums: List[int]) -> None:

        n = len(nums)

        p0 = 0
        p1 = 0

        for i in range(n):
            if nums[i] == 1:
                nums[i], nums[p1] = nums[p1], nums[i]
                p1 += 1
            elif nums[i] == 0:
                nums[i], nums[p0] = nums[p0], nums[i]

                if p0 < p1:
                    nums[i], nums[p1] = nums[p1], nums[i],

                p0 += 1
                p1 += 1


# @lc code=end
