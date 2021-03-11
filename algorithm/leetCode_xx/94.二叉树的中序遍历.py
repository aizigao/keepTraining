#
# @lc app=leetcode.cn id=94 lang=python3
#
# [94] 二叉树的中序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    # 递归 O(n) / O(n)
    def inorderTraversal_1(self, root: TreeNode) -> List[int]:

        res = []

        def inorder(c_root):
            if not c_root:
                return
            inorder(c_root.left)
            res.append(c_root.val)
            inorder(c_root.right)

        inorder(root)
        return res

    # 迭代
    def inorderTraversal(self, root: TreeNode) -> List[int]:

        res = []
        stack = []
        while root or stack:
            while root:
                # 前序放这里
                # res.append(root.val)
                stack.append(root)
                root = root.left
            root = stack.pop()
            # 中序放这里
            res.append(root.val)
            root = root.right
        return res

    # 方法三：Morris 中序遍历 空间复杂度降为 O(1) 这个先不看

# @lc code=end
