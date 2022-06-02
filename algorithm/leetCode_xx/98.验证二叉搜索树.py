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
    def isValidBST(self, root: TreeNode) -> bool:
        def dfs(node, left, right):
            if not node:
                return True

            if node.val <= left:
                return False
            if node.val >= right:
                return False

            l = dfs(node.left, left, node.val)
            r = dfs(node.right, node.val, right)
            return l and r

        # left.val < root.val < right.val
        return dfs(root, -float('inf'), float('inf'))

    # --
    # -- 方法二：中序遍历
    def isValidBST2(self, root: TreeNode) -> bool:
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
