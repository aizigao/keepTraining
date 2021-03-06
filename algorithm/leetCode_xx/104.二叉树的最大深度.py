#
# @lc app=leetcode.cn id=104 lang=python3
#
# [104] 二叉树的最大深度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    """
    # -- 深度优先
    O(n) / O(height)
    """

    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        left_max_height = self.maxDepth(root.left)
        right_max_heigt = self.maxDepth(root.right)

        return max(left_max_height, right_max_heigt) + 1

# @lc code=end
