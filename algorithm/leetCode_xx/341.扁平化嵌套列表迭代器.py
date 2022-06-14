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
        result = []
        for i in nestedList:
            self.traverse(i, result)
        self.it = result
        pass

    def traverse(self, root, result):
        if root.isInteger():
            result.append(root.getInteger())
        else:
            for i in root.getList():
                self.traverse(i, result)

    def next(self) -> int:
        val = self.it.pop(0)
        return val

    def hasNext(self) -> bool:
        return len(self.it)


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
# @lc code=end
