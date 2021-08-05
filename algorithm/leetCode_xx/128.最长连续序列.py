#
# @lc app=leetcode.cn id=128 lang=python3
#
# [128] 最长连续序列
#

'''
https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/zui-chang-lian-xu-xu-lie-by-leetcode-solution/
'''

# @lc code=start
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest_streak = 0
        # 新建hash
        num_set = set(nums)

        for num in num_set:
            # 这句最有意思了 由于我们要枚举的数 xx 一定是在数组中不存在前驱数 x-1x−1 的，不然按照上面的分析我们会从 x-1x−1 开始尝试匹配，因此我们每次在哈希表中检查是否存在 x-1x−1 即能判断是否需要跳过了。
            if num - 1 not in num_set:
                current_num = num
                current_streak = 1

                while current_num + 1 in num_set:
                    current_num += 1
                    current_streak += 1

                longest_streak = max(longest_streak, current_streak)

        return longest_streak


# @lc code=end
