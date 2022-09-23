#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] 最大子序和
#

# @lc code=start


class Solution:
    # // 方法二 分法TODO: 太长不看
    # // https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/

    # // 方法一 动态规划 O(n) / O(1)
    def maxSubArray(self, nums: List[int]) -> int:
        pre = 0
        max_ans = nums[0]

        for n in nums:
            pre = max(pre + n, n)
            max_ans = max(pre, max_ans)
        return max_ans


# @lc code=end
