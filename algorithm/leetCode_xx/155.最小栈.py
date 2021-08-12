#
# @lc app=leetcode.cn id=155 lang=python3
#
# [155] 最小栈
# 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
#
'''
理论上的最小栈结构是下面的样子，这题不太一样
# 定义: https://oi-wiki.org/ds/monotonous-stack/
insert x
while !sta.empty() && sta.top()<x
  sta.pop()
ta.push(x)
'''

# @lc code=start


class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = [math.inf]

    def push(self, x: int) -> None:
        self.stack.append(x)
        self.min_stack.append(min(x, self.min_stack[-1]))

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]


# @lc code=end
