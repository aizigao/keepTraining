#
# @lc app=leetcode.cn id=213 lang=python3
#
# [213] 打家劫舍 II
#

# @lc code=start


class Solution:
    '''
    如何才能保证第一间房屋和最后一间房屋不同时偷窃呢？如果偷窃了第一间房屋，则不能偷窃最后一间房屋，因此偷窃房屋的范围是第一间房屋到最后第二间房屋；如果偷窃了最后一间房屋，则不能偷窃第一间房屋，因此偷窃房屋的范围是第二间房屋到最后一间房屋
    '''
    def rob(self, nums: List[int]) -> int:

        n = len(nums)

        if n == 0:
            return 0
        if n == 1:
            return nums[0]

        if n == 2:
            return max(nums[0], nums[1])

        def robRange(start, end):
            p = nums[start]
            q = max(nums[start + 1], nums[start])

            for i in range(start + 2, end + 1):
                t = max(p + nums[i], q)
                p = q
                q = t
            return q

        return max(robRange(0, n - 2), robRange(1, n - 1))


# @lc code=end
