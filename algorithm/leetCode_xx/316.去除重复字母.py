#
# @lc app=leetcode.cn id=316 lang=python3
#
# [316] 去除重复字母
#


# @lc code=start
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        #
        stk = []
        # 布尔数组初始值为 false，记录栈中是否存在某个字符
        # 输入字符均为 ASCII 字符，所以大小 256 够用了
        inStack = [False] * 256

        for c in s:
            cOrd = ord(c)
            # 如果字符 c 存在栈中，直接跳过
            if inStack[cOrd]:
                continue
            # 若不存在，则插入栈顶并标记为存在
            stk.append(c)
            inStack[cOrd] = True

        return ''.join(stk)


# @lc code=end
