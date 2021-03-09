#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start


class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False

        pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        stack = []

        for ch in s:
            if ch not in pairs:
                stack.append(ch)
            else:
                # 推的时候stack为空
                if not stack:
                    return False
                if pairs[ch] != stack[-1]:
                    return False
                stack.pop()

        return len(stack) == 0


# @lc code=end
