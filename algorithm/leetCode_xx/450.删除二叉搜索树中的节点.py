#
# @lc app=leetcode.cn id=450 lang=python3
#
# [450] 删除二叉搜索树中的节点
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: Optional[TreeNode],
                   key: int) -> Optional[TreeNode]:
        if not root:
            return None
        if root.val == key:
            # 1. 单子树 或没有 子树下
            if not root.left:
                return root.right
            if not root.right:
                return root.left

            # 2. 双子树

            # 2.1 找到右树最小
            minNode = self.findMin(root.right)
            #  删除右子树最小的节点
            root.right = self.deleteNode(root.right, minNode.val)

            minNode.left = root.left
            minNode.right = root.right
            #   用右子树最小的节点替换 root 节点
            root = minNode

        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
        else:
            root.left = self.deleteNode(root.left, key)
        return root

    def findMin(self, root):
        cur = root
        while cur.left:
            cur = cur.left
        return cur


# @lc code=end
