#
# @lc app=leetcode.cn id=303 lang=python3
#
# [303] 区域和检索 - 数组不可变
#


# @lc code=start
class NumArray:
    def __init__(self, nums: List[int]):
        n = len(nums)

        # 计算前缀和
        preSum = [0 for i in range(n + 1)]
        for i in range(1, n + 1):
            preSum[i] = preSum[i - 1] + nums[i - 1]
        self.preSum = preSum

    def sumRange(self, left: int, right: int) -> int:
        # 查询闭区间 [left, right] 的累加和
        return self.preSum[right + 1] - self.preSum[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
# @lc code=end
