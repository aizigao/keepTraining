#
# @lc app=leetcode.cn id=101 lang=python3
#
# [101] 对称二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def check(self, p, q):
        # 左右都没有
        if not p and not q:
            return True

        # 左右只有一个
        if not p or not q:
            return False

        return p.val == q.val and self.check(p.left, q.right) and self.check(p.right, q.left)

    def isSymmetric(self, root: TreeNode) -> bool:
        return self.check(root, root)
# @lc code=end
