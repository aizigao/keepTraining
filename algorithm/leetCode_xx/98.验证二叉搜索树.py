#
# @lc app=leetcode.cn id=98 lang=python3
#
# [98] 验证二叉搜索树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    # 一 dfs
    def isValidBST_1(self, root: TreeNode) -> bool:
        def dfs(root, left, right):
            if not root:
                return True

            if root.val > left and root.val < right:
                return dfs(
                    root.left,
                    left,
                    root.val
                ) and dfs(
                    root.right,
                    root.val,
                    right
                )
            else:
                return False

        return dfs(root, -float('inf'), float('inf'))

    # --
    # --
    # --
    # --
    # --
    # -- 方法二：中序遍历
    def isValidBST(self, root: TreeNode) -> bool:
        stack, inorder = [], float('-inf')

        while stack or root:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            # 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
            if root.val <= inorder:
                return False
            inorder = root.val
            root = root.right

        return True

# @lc code=end
