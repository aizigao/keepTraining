#
# @lc app=leetcode.cn id=1676 lang=python3
#
# [1676] 二叉树的最近公共祖先 IV
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
'''
lca


依然给你输入一棵不含重复值的二叉树，但这次不是给你输入p和q两个节点了，而是给你输入一个包含若干节点的列表nodes（这些节点都存在于二叉树中），让你算这些节点的最近公共祖先。

'''
'''
模板
def find(root, val1, val2):
    if not root:
        return

    if root.val == val1 or root.val == val2:
        return root

    left = find(root.left, val1, val2)
    right = find(root.right, val1, val2)

    return left or right
'''


def find(root, values):
    if not root:
        return
    # 前序位置 如果遇到目标值，直接返回
    if root.val in values:
        return root

    left = find(root.left, values)
    right = find(root.right, values)

    # 后序位置，已经知道左右子树是否存在目标值
    if left and right:
        # 当前节点是 LCA 节点, 在find函数的后序位置，如果发现left和right都非空，就说明当前节点是LCA节点
        return root

    return left or right


class Solution:
    # 使用模板
    def lowestCommonAncestor(
        self,
        root: 'TreeNode',
        nodes,
    ) -> 'TreeNode':
        values = [i.val for i in nodes]
        return find(root, values)


# @lc code=end
