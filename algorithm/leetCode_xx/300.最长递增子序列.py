#
# @lc app=leetcode.cn id=300 lang=python3
#
# [300] 最长递增子序列
#


# @lc code=start
class Solution:
    '''
    dp[i] -> 以 num[i]这个数结尾的 最长递增序列长度
    O(n^2)
    '''
    def lengthOfLIS_1(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [1] * n

        for i in range(n):
            # 找到i之前, 比nums[i]小的数
            # 这里可以优化
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[j] + 1, dp[i])

        res = 0
        for i in range(n):
            res = max(res, dp[i])
        return res

    '''
    二分
    O(nlogn)
    '''

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
