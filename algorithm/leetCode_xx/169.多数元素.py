#
# @lc app=leetcode.cn id=169 lang=python3
#
# [169] 多数元素
#

# @lc code=start


class Solution:
    # map 模式
    def majorityElement1(self, nums: List[int]) -> int:
        map = dict()
        n = len(nums)

        for num in nums:
            if num in map:
                map[num] += 1
            else:
                map[num] = 1
        for num in map:
            if map[num] > n/2:
                return num
        return -1

    # 排序取中间
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        return nums[len(nums) // 2]
    # 方法三：随机化
    # 方法四：分治 TODO:
    # 方法五：Boyer-Moore 投票算法
# @lc code=end
