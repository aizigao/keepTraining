#
# @lc app=leetcode.cn id=1081 lang=python3
#
# [1081] 不同字符的最小子序列
#


# @lc code=start
class Solution:
    def smallestSubsequence(self, s: str) -> str:
        stack = []
        seen = set()
        remain_counter = collections.Counter(s)

        for c in s:
            if c not in seen:
                while stack and c < stack[-1] and remain_counter[
                        stack[-1]] > 0:
                    seen.discard(stack.pop())
                seen.add(c)
                stack.append(c)
            remain_counter[c] -= 1
        return ''.join(stack)


# @lc code=end
