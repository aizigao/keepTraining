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

        def onSideMax(root):
            if not root:
                return 0
            nonlocal res
            l = max(0, onSideMax(root.left))
            r = max(0, onSideMax(root.right))

            pathMaxPath = root.val + l + r
            res = max(res, pathMaxPath)

            return max(l, r) + root.val

        onSideMax(root)
        return res


# @lc code=end
