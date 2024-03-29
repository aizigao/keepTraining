#
# @lc app=leetcode.cn id=139 lang=python3
#
# [139] 单词拆分
#
'''
https://leetcode-cn.com/problems/word-break/solution/dan-ci-chai-fen-by-leetcode-solution/
时间复杂度：O(n^2)O(n 
2
 ) ，其中 nn 为字符串 ss 的长度。我们一共有 O(n)O(n) 个状态需要计算，每次计算需要枚举 O(n)O(n) 个分割点，哈希表判断一个字符串是否出现在给定的字符串列表需要 O(1)O(1) 的时间，因此总时间复杂度为 O(n^2)O(n 
2
 )。

空间复杂度：O(n)O(n) ，其中 nn 为字符串 ss 的长度。我们需要 O(n)O(n) 的空间存放 \textit{dp}dp 值以及哈希表亦需要 O(n)O(n) 的空间复杂度，因此总空间复杂度为 O(n)O(n)
'''


# @lc code=start
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        dp = [True] + [False] * n

        for i in range(n):
            for j in range(i + 1, n + 1):
                if dp[i] and s[i:j] in wordDict:
                    dp[j] = True
        return dp[-1]


# @lc code=end
