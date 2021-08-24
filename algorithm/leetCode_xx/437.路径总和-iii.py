#
# @lc app=leetcode.cn id=437 lang=python3
#
# [437] 路径总和 III
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # 方法一: 分治1 TODO: 再看其它
    def pathSum(self, root: TreeNode, targetSum: int) -> int:
        if not root:
            return 0

        return self.count(root, targetSum)  + \
                self.pathSum(root.left, targetSum) + \
                self.pathSum(root.right, targetSum)

    # 已当前节点为路径开头目标合的总数
    def count(self, node: TreeNode, sum: int) -> int:
        if not node:
            return 0

        return (1 if node.val == sum else 0) + \
            self.count(node.left, sum - node.val) + \
            self.count(node.right, sum - node.val)


# @lc code=end
