#
# @lc app=leetcode.cn id=701 lang=python3
#
# [701] 二叉搜索树中的插入操作
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        if not root:
            return TreeNode(val)

        # 一般插入时不处理 相同结点
        # if val == root.val:
        #     pass

        if val > root.val:
            root.right = self.insertIntoBST(root.right, val)
        elif val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        return root


# @lc code=end
