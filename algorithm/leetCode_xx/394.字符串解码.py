#
# @lc app=leetcode.cn id=394 lang=python3
#
# [394] 字符串解码
#


# @lc code=start
class Solution:
    """
    方法一：栈操作
    本题中可能出现括号嵌套的情况，比如 2[a2[bc]]，这种情况下我们可以先转化成 2[abcbc]，在转化成 abcbcabcbc。我们可以把字母、数字和括号看成是独立的 TOKEN，并用栈来维护这些 TOKEN。具体的做法是，遍历这个栈：

    如果当前的字符为数位，解析出一个数字（连续的多个数位）并进栈
    如果当前的字符为字母或者左括号，直接进栈
    如果当前的字符为右括号，开始出栈，一直到左括号出栈，出栈序列反转后拼接成一个字符串，此时取出栈顶的数字（此时栈顶一定是数字，想想为什么？），就是这个字符串应该出现的次数，我们根据这个次数和字符串构造出新的字符串并进栈
    重复如上操作，最终将栈中的元素按照从栈底到栈顶的顺序拼接起来，就得到了答案。注意：这里可以用不定长数组来模拟栈操作，方便从栈底向栈顶遍历。
    """
    def decodeString(self, s: str) -> str:
        stack = []
        rst = ''
        multi = 0

        for c in s:
            if c == '[':
                stack.append([multi, rst])
                multi = 0
                rst = ''
            elif c == ']':
                [curMulti, curRst] = stack.pop()

                rst = curRst + curMulti * rst
            elif '0' <= c <= '9':
                multi = multi * 10 + int(c)
            else:
                rst += c
        return rst


# @lc code=end
