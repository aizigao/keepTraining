#
# @lc app=leetcode.cn id=337 lang=python3
#
# [337] 打家劫舍 III
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    '''
    后序遍历这棵二叉树
    时：O(n)
    空：O(n) 栈数
    '''
    def rob(self, root: TreeNode) -> int:
        def dfs(node):
            if not node: return 0, 0

            l_sel, l_not_sel = dfs(node.left)
            r_sel, r_not_sel = dfs(node.right)

            sel = node.val + l_not_sel + r_not_sel
            no_sel = max(l_sel, l_not_sel) + max(r_sel, r_not_sel)

            return sel, no_sel

        return max(dfs(root))


# @lc code=end
