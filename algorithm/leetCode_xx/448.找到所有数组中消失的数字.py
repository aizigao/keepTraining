#
# @lc app=leetcode.cn id=448 lang=python3
#
# [448] 找到所有数组中消失的数字
#

# @lc code=start


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n = len(nums)

        for num in nums:
            idx = (num - 1) % n
            nums[idx] += n

        ret = []
        for i, num in enumerate(nums):
            if num <= n:
                ret.append(i+1)
        return ret


# @lc code=end
