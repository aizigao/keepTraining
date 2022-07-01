#
# @lc app=leetcode.cn id=316 lang=python3
#
# [316] 去除重复字母
#

# @lc code=start
'''
要求一、要去重。

要求二、去重字符串中的字符顺序不能打乱s中字符出现的相对顺序。

要求三、在所有符合上一条要求的去重字符串中，字典序最小的作为最终结果。

上述三条要求中，要求三可能有点难理解，举个例子。

比如说输入字符串s = "babc"，去重且符合相对位置的字符串有两个，分别是"bac"和"abc"，但是我们的算法得返回"abc"，因为它的字典序更小。



中插入字符'a'的这一刻，我们的算法需要知道，字符'a'的字典序和之前的两个字符'b'和'c'相比，谁大谁小？
如果当前字符'a'比之前的字符字典序小，就有可能需要把前面的字符 pop 出栈，让'a'排在前面

'''


class Solution:
    '''
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

            #  // 插入之前，和之前的元素比较一下大小
            # // 如果字典序比前面的小，pop 前面的元素
            while stk and stk[0] > c:
                delV = stk.pop(0)
                inStack[ord(delV)] = False

            stk.append(c)
            inStack[cOrd] = True

        return ''.join(stk)
    '''
    def removeDuplicateLetters(self, s: str) -> str:
        stk = []

        # 维护一个计数记录字符串中字符的数量
        # 由于是 ASCII 字符，大小256就够了
        count = [0] * 256
        for c in s:
            count[ord(c)] += 1

        inStack = [False] * 256

        for c in s:
            cOrd = ord(c)
            count[cOrd] -= 1

            if inStack[cOrd]:
                continue

            while stk and stk[0] > c:
                # 若之后不存在栈顶元素了，则停止 pop
                if count[ord(stk[0])] == 0:
                    break

                # 若之后，则可以pop
                inStack[ord(stk.pop())] = False

            stk.append(c)
            inStack[cOrd] = True
        return ''.join(stk)


# @lc code=end
