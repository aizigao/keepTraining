#
# @lc app=leetcode.cn id=236 lang=python3
#
# [236] 二叉树的最近公共祖先
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


如果一个节点能够在它的左右子树中分别找到p和q，则该节点为LCA节点。
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


def find(root, val1, val2):
    if not root:
        return
    # 前序位置 如果遇到目标值，直接返回
    if root.val == val1 or root.val == val2:
        return root

    left = find(root.left, val1, val2)
    right = find(root.right, val1, val2)

    # 后序位置，已经知道左右子树是否存在目标值
    if left and right:
        # 当前节点是 LCA 节点, 在find函数的后序位置，如果发现left和right都非空，就说明当前节点是LCA节点
        return root

    return left or right


class Solution:
    def lowestCommonAncestor1(self, root: 'TreeNode', p: 'TreeNode',
                              q: 'TreeNode') -> 'TreeNode':
        return find(root, p.val, q.val)

    # bst 性质
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode',
                             q: 'TreeNode') -> 'TreeNode':
        ancestor = root
        while True:
            if p.val < ancestor.val and q.val < ancestor.val:
                ancestor = ancestor.left
            elif p.val > ancestor.val and q.val > ancestor.val:
                ancestor = ancestor.right
            else:
                break
        return ancestor


# @lc code=end
