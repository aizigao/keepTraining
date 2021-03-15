#
# @lc app=leetcode.cn id=39 lang=python3
#
# [39] 组合总和
#

# @lc code=start


class Solution:
    # 方法一：搜索回溯
    """
    O(S) | O(target)  看不懂了
    """

    def combinationSum_1(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []

        def dfs(target, combine, idx):

            # 过范围了
            if idx >= len(candidates):
                return

            # 到达目标
            if target == 0:
                ans.append(combine)
                return

            # 直接跳过
            dfs(target, combine, idx + 1)

            # 选择当前数
            if target - candidates[idx] >= 0:
                dfs(target - candidates[idx], combine+[candidates[idx]], idx)

        dfs(target, [], 0)
        return ans

    # 这个才是我熟悉的回溯
    def combinationSum(self, candidates, target):
        ans = []
        temp = []

        def backtrack(idx, assem):

            if idx >= len(candidates):
                return

            if assem >= target:
                if assem == target:
                    ans.append(
                        temp[:]
                    )
                return

            temp.append(candidates[idx])
            backtrack(idx, assem + candidates[idx])
            temp.pop()

            backtrack(idx+1, assem)
        backtrack(0, 0)

        return ans


# @lc code=end
