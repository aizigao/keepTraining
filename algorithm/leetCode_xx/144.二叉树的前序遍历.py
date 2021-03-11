#
# @lc app=leetcode.cn id=144 lang=python3
#
# [144] 二叉树的前序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        def preorder(root: TreeNode):
            if not root:
                return
            res.append(root.val)
            preorder(root.left)
            preorder(root.right)

        res = list()
        preorder(root)
        return res

    # 迭代
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res = list()
        if not root:
            return res

        stack = []
        node = root
        while stack or node:
            while node:
                # 前序放这里
                res.append(node.val)
                # ----
                stack.append(node)
                node = node.left
            node = stack.pop()
            # -- 中序放这里，后序麻烦的很，看145.
            node = node.right
        return res


# @lc code=end
