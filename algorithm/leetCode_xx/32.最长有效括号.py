#
# @lc app=leetcode.cn id=32 lang=python3
#
# [32] 最长有效括号
#

# @lc code=start
from re import L


class Solution:
    # 方法一： DP
    '''
    dp[i] 表示为以i为结尾最大的长度
    
    - s[i] == '(' 时, dp[i] = 0
    - s[i] == ') 时,
        s[i-1] == ')'， 则dp[i] = dp[i-2] + 2 
        s[i-1] == ')', 则
            如果 s[i -dp[i-1] -1] 一定为 '(' 则
            dp[i] = dp[i-1] + dp[i- dp[i-1] -1 - 1] + 2
    '''
    def longestValidParentheses1(self, s: str) -> int:
        maxans = 0
        size = len(s)
        dp = [0] * size

        for i in range(1, size):
            if s[i] == ')':
                if s[i - 1] == '(':
                    dp[i] = (dp[i - 2] if i >= 2 else 0) + 2
                elif i - dp[i - 1] > 0 and s[i - dp[i - 1] - 1] == '(':
                    dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] if
                                         (i - dp[i - 1]) >= 2 else 0) + 2
            maxans = max(maxans, dp[i])
        return maxans

    '''
    方法二 栈

    - 遇到 ( 入栈
    - 遇到 ) 出栈
        * 如果栈为空，说明当前的右括号为没有被匹配的右括号，我们将其下标放入栈中来更新我们之前提到的「最后一个没有被匹配的右括号的下标」
        * 如果栈不为空，当前右括号的下标减去栈顶元素即为「以该右括号为结尾的最长有效括号的长度」
    时间复杂度: O(n)
    空间: O(n) 栈大小
    '''

    def longestValidParentheses2(self, s: str) -> int:
        maxans = 0
        stack = [-1]

        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            else:
                stack.pop()

                if not stack:
                    stack.append(i)
                else:
                    maxans = max(maxans, i - stack[-1])
        return maxans

    '''
    方法三
    不需要额外的空间
    我们利用两个计数器left 和 right 

    - 首先，我们从左到右遍历字符串，
    - 对于遇到的每个(，我们增加 left 计数器，
    - 对于遇到的每个 ) ，我们增加 right 计数器

    - 每当 left 计数器与right 计数器相等时，我们计算当前有效字符串的长度，并且记录目前为止找到的最长子字符串。
    - 当 right 计数器比 left 计数器大时，我们将 left 和 right 计数器同时变回 0

    时间: O(n)
    空间: O(n)
    '''

    def longestValidParentheses(self, s: str) -> int:
        left, right, maxlength = 0, 0, 0

        for i in range(len(s)):
            if s[i] == '(':
                left += 1
            else:
                right += 1

            if left == right:
                maxlength = max(maxlength, 2 * right)
            
            # ) 多于 ( 则重新计数
            elif right > left:
                left = 0
                right = 0

        left = 0
        right = 0

        for i in range(len(s) - 1, 0, -1):
            if s[i] == '(':
                left += 1
            else:
                right += 1

            if left == right:
                maxlength = max(maxlength, 2 * left)
            elif left > right:
                left = 0
                right = 0
        return maxlength


# @lc code=end
