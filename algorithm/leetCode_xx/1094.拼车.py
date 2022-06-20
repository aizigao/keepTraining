#
# @lc app=leetcode.cn id=1094 lang=python3
#
# [1094] 拼车
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
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        diff = Difference([0] * 1001)

        for trip in trips:
            [num, fr, to] = trip

            diff.increment(fr, to - 1, num)

        rst = diff.result()

        for i in rst:
            if capacity < i:
                return False
        return True


# @lc code=end
