#
# @lc app=leetcode.cn id=341 lang=python3
#
# [341] 扁平化嵌套列表迭代器
#

# @lc code=start
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
#class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """


class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        # 不直接用 nestedList 的引用，是因为不能确定它的底层实现
        self.stack = nestedList

    def next(self) -> int:
        # hasNext 方法保证了第一个元素一定是整数类型
        return self.stack.pop(0).getInteger()

    def hasNext(self) -> bool:
        while self.stack:
            if self.stack[0].isInteger():
                return True
            else:
                cur = self.stack.pop(0).getList()
                for idx, i in enumerate(cur):
                    self.stack.insert(idx, i)
        return False


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
# @lc code=end
