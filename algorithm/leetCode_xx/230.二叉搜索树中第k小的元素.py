#
# @lc app=leetcode.cn id=230 lang=python3
#
# [230] 二叉搜索树中第K小的元素
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # 使用二叉树的性质
    def kthSmallest1(self, root: Optional[TreeNode], k: int) -> int:
        count = 0
        rst = None

        def traverse(node):
            if not node:
                return
            traverse(node.left)
            nonlocal count
            nonlocal rst
            count += 1
            if count == k:
                rst = node.val
                return
            traverse(node.right)

        traverse(root)
        return rst

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        pass


# @lc code=end
