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
    def maxDepth1(self, root: TreeNode) -> int:
        if root is None:
            return 0
        # // 利用定义，计算左右子树的最大深度
        left_max_height = self.maxDepth(root.left)
        right_max_heigt = self.maxDepth(root.right)

        # 然后再加上根节点自己
        return max(left_max_height, right_max_heigt) + 1

    def maxDepth(self, root: TreeNode) -> int:
        maxDepth = 0
        depth = 0

        def traverse(node):
            nonlocal maxDepth
            nonlocal depth
            if not node:
                return

            depth += 1

            if not node.left and not node.right:
                maxDepth = max(depth, maxDepth)
            traverse(node.left)
            traverse(node.right)
            depth -= 1

        traverse(root)
        return maxDepth


# @lc code=end
