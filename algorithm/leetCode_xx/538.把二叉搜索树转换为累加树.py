#
# @lc app=leetcode.cn id=538 lang=python3
#
# [538] 把二叉搜索树转换为累加树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = righr
"""
给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

- 节点的左子树仅包含键 小于 节点键的节点。
- 节点的右子树仅包含键 大于 节点键的节点。
- 左右子树也必须是二叉搜索树。

"""

# 方法一：反序中序遍历 用这个
# 方法二：Morris 遍历 这个没有必要看


class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        total = 0

        def dfs(c_root):
            nonlocal total
            if not c_root:
                return
            dfs(c_root.right)
            # 中序
            total += c_root.val
            c_root.val = total
            dfs(c_root.left)

        dfs(root)

        return root


# @lc code=end
