#
# @lc app=leetcode.cn id=354 lang=python3
#
# [354] 俄罗斯套娃信封问题
#

# @lc code=start
import functools


class Solution:
    '''
    先对宽度 w 进行升序排序，如果遇到 w 相同的情况，则按照高度 h 降序排序；之后把所有的 h 作为一个数组，在这个数组上计算 LIS 的长度就是答案。
    '''
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        n = len(envelopes)

        # 按宽度升序， 高序降序
        def compare(a, b):
            # x[0] w
            # x[1] h
            return b[1] - a[1] if a[0] == b[0] else a[0] - b[0]

        list.sort(envelopes, key=functools.cmp_to_key(compare))

        # 对高度数组寻找LIS

        height = [None] * n

        for i in range(n):
            height[i] = envelopes[i][1]

        return self.lengthOfLIS(height)

    def lengthOfLIS(self, nums: List[int]) -> int:
        top = [None] * len(nums)
        # 牌堆初始化 0
        piles = 0

        for i in range(len(nums)):
            # 要处理的poker
            poker = nums[i]

            # 左边界二分
            l = 0
            r = piles
            while l < r:
                mid = (r + l) // 2

                if top[mid] > poker:
                    r = mid
                elif top[mid] < poker:
                    l = mid + 1
                else:
                    r = mid

            # 没有找到合适的，新建一堆
            if l == piles:
                piles += 1
            # 把这张牌放到牌堆顶
            top[l] = poker
        return piles


# @lc code=end
