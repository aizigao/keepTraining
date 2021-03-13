#
# @lc app=leetcode.cn id=34 lang=python3
#
# [34] 在排序数组中查找元素的第一个和最后一个位置
#

# @lc code=start


def binarySearch(nums, target):
    l = 0
    r = len(nums) - 1
    found = False
    ans = -1

    while l <= r and not found:
        mid = (l+r)//2
        mid_val = nums[mid]

        if mid_val == target:
            ans = mid
            found = True
        elif mid_val > target:
            r = mid - 1
        else:
            l = mid + 1

    return ans


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:

        n = len(nums)
        ans = [-1, -1]
        oneOfTargetIdx = binarySearch(nums, target)

        if oneOfTargetIdx > -1:
            l = oneOfTargetIdx
            r = oneOfTargetIdx

            while l >= 1 and nums[l-1] == nums[oneOfTargetIdx]:
                l -= 1

            while r < n - 1 and nums[r+1] == nums[oneOfTargetIdx]:
                r += 1
            ans = [l, r]

        return ans

# @lc code=end
