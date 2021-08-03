#
# @lc app=leetcode.cn id=78 lang=python3
#
# [78] 子集
#
'''
https://leetcode-cn.com/problems/subsets/solution/zi-ji-by-leetcode-solution/
'''


# @lc code=start
class Solution:
    '''
    方法一：迭代法实现子集枚举
    时间复杂度：O(nx2^n)。一共 2^n2 n 个状态，每种状态需要 O(n) 的时间来构造子集。
    空间复杂度：O(n)。即构造子集使用的临时数组 t 的空间代价。
    '''
    def subsets2(self, nums: List[int]) -> List[List[int]]:
        ans = []
        n = len(nums)
        # 便利 0 -> n * 2^n
        for mask in range(1 << n):
            # mask 为 101
            t = []
            # 遍历原数组长度
            for i in range(n):
                if mask & (1 << i):
                    t.append(nums[i])
            ans.append(t)
        return ans

    '''
    递归法实现子集枚举 回溯
    时间复杂度：O(n×2^n)。一共 2^n2 个状态，每种状态需要 O(n) 的时间来构造子集。
    空间复杂度：O(n)。临时数组 t 的空间代价是 O(n)，递归时栈空间的代价为 O(n)。
    '''

    def subsets(self, nums: List[int]) -> List[List[int]]:
        t = []
        ans = []
        n = len(nums)

        def dfs(cur):
            if cur == n:
                ans.append(t[::])
                return
            # 考虑选择当前位置
            t.append(nums[cur])
            dfs(cur + 1)
            t.pop(len(t) - 1)
            # 考虑不选择当前位置
            dfs(cur + 1)

        dfs(0)
        return ans


# @lc code=end
