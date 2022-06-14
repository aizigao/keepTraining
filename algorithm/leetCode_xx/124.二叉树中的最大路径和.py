#
# @lc app=leetcode.cn id=124 lang=python3
#
# [124] 二叉树中的最大路径和
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        res = -float('inf')

        def onSidePathMax(root):
            nonlocal res
            if not root:
                return 0

            l = max(0, onSidePathMax(root.left))
            r = max(0, onSidePathMax(root.right))

            pathMax = l + r + root.val
            res = max(pathMax, res)
            return max(l, r) + root.val

        onSidePathMax(root)

        return res


# @lc code=end
