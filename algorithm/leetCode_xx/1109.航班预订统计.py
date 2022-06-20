#
# @lc app=leetcode.cn id=1109 lang=python3
#
# [1109] 航班预订统计
#


# @lc code=start
class Difference:
    def __init__(self, nums):
        if not nums:
            return

        diff = [0 for i in nums]
        diff[0] = nums[0]

        for i in range(1, len(nums)):
            diff[i] = nums[i - 1] - nums[i]
        self.diff = diff

    # 区间 [i, j]
    def increment(self, i, j, val):
        self.diff[i] += val
        if j < len(self.diff) - 1:
            self.diff[j + 1] -= val

    def result(self):
        res = [self.diff[0]]
        for i in range(1, len(self.diff)):
            res.append(res[i - 1] + self.diff[i])
        return res


class Solution:
    def corpFlightBookings(self, bookings: List[List[int]],
                           n: int) -> List[int]:
        nums = [0 for i in range(n)]
        diff = Difference(nums)

        for booking in bookings:
            [i, j, val] = booking
            diff.increment(i - 1, j - 1, val)

        return diff.result()


# @lc code=end
