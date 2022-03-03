#
# @lc app=leetcode.cn id=238 lang=python3
#
# [238] 除自身以外数组的乘积
#


# @lc code=start
class Solution:
    # 方法一. 左右乘积列表
    '''
    时间复杂度：O(N)，其中 N 指的是数组 nums 的大小。预处理 L 和 R 数组以及最后的遍历计算都是 O(N) 的时间复杂度。
    空间复杂度：O(N)，其中 N 指的是数组 nums 的大小。使用了 L 和 R 数组去构造答案，L 和 R 数组的长度为数组 nums 的大小。
    '''
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        size = len(nums)
        l, r, ans = [0] * size, [0] * size, [0] * size

        l[0] = 1
        r[size - 1] = 1

        for i in range(1, size):
            l[i] = nums[i - 1] * l[i - 1]

        for i in reversed(range(size - 1)):
            r[i] = nums[i + 1] * r[i + 1]

        for i in range(size):
            ans[i] = l[i] * r[i]

        return ans


# @lc code=end
