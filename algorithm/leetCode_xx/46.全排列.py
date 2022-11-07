#
# @lc app=leetcode.cn id=46 lang=python3
#
# [46] 全排列
#

# @lc code=start


"""
O(n*n!) / O(n)
"""


class Solution:
    # 001 写的太抽象了
    def permutex(self, nums):
        n = len(nums)
        res = []

        def backtrack(idx):
            if idx >= n:
                res.append(nums[:])
                return

            for i in range(idx, n):
                nums[idx], nums[i] = nums[i], nums[idx]
                backtrack(idx+1)
                nums[i], nums[idx] = nums[idx], nums[i]

        backtrack(0)
        return res

    def permute(self, nums):
        track = []
        used = dict()
        self.res = []
        self.backtrack(nums, track, used)
        return self.res

    def backtrack(self, nums, track, used):
        if len(track) == len(nums):
            self.res.append(
                track.copy()
            )
            return

        for i in range(len(nums)):
            # 排除不合法的选择
            if i in used and used[i]:
                continue

            track.append(nums[i])
            used[i] = True

            self.backtrack(nums, track, used)

            track.pop()
            used[i] = False


# @lc code=end


print(Solution().permute([1, 2, 3]))
