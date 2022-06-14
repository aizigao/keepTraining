#
# @lc app=leetcode.cn id=222 lang=python3
#
# [222] 完全二叉树的节点个数
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # 一
    def countNodes1(self, root: TreeNode) -> int:
        if not root:
            return 0
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)

    #  Perfect Binary Tree 满二叉树 节点总数就和树的高度呈指数关系：
    def countNodes2(self, root: TreeNode) -> int:
        h = 0
        while root:
            root = root.left
            h += 1
        return pow(2, h) - 1

    # 完全二叉树  Complete Binary Tree
    def countNodes(self, root: TreeNode) -> int:
        l = root
        r = root

        hl = 0
        hr = 0

        while l:
            l = l.left
            hl += 1
        while r:
            r = r.right
            hr += 1

        # 如果左右高度相同,为 满二叉树
        if hl == hr:
            return pow(2, hl) - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)


# @lc code=end
