#
# @lc app=leetcode.cn id=315 lang=python3
#
# [315] 计算右侧小于当前元素的个数
#


# @lc code=start
class Solution:
    '''
    主要在 merge 函数，我们在使用 merge 函数合并两个有序数组的时候，其实是可以知道一个元素 nums[i] 后边有多少个元素比 nums[i] 小的。
    '''
    def countSmaller(self, nums: List[int]) -> List[int]:
        nums = list(enumerate(nums))
        cnt = [0 for _ in nums]

        def mergesort(nums):
            n = len(nums)
            if n < 2:
                return
            mid = n // 2

            nums_l, nums_r = nums[0:mid], nums[mid:n]

            mergesort(nums_l)
            mergesort(nums_r)

            i, j = 0, 0

            while i + j < n:
                if (
                    i < mid and j < n - mid \
                    and nums_l[i][1] <= nums_r[j][1]
                   )  \
                    or (j == n - mid) :

                    nums[i + j] = nums_l[i]
                    cnt[nums[i + j][0]] += j  # 相比排序需加这一句话
                    i += 1
                else:
                    nums[i + j] = nums_r[j]
                    j += 1

        mergesort(nums)
        return cnt


# @lc code=end
