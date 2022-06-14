#
# @lc app=leetcode.cn id=1644 lang=python3
#
# [1644] 二叉树的最近公共祖先 II
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


给你输入一棵不含重复值的二叉树的，以及两个节点p和q，如果p或q不存在于树中，则返回空指针，否则的话返回p和q的最近公共祖先节点。
后序
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


class Solution:
    # 使用模板
    def lowestCommonAncestor1(self, root: 'TreeNode', p: 'TreeNode',
                              q: 'TreeNode') -> 'TreeNode':
        foundP = False
        foundQ = False

        def find(root, val1, val2):
            if not root:
                return
            nonlocal foundP
            nonlocal foundQ

            left = find(root.left, val1, val2)
            right = find(root.right, val1, val2)

            # 后序位置，已经知道左右子树是否存在目标值
            if left and right:
                # 当前节点是 LCA 节点, 在find函数的后序位置，如果发现left和right都非空，就说明当前节点是LCA节点
                return root

            # 后序位置，判断当前节点是不是目标值
            # p和q不一定存在于树中，所以你不能遇到一个目标值就直接返回，而应该对二叉树进行完全搜索（遍历每一个节点）
            if root.val == val1 or root.val == val2:
                if root.val == val1:
                    foundP = True
                if root.val == val2:
                    foundQ = True
                return root

            return left or right

        rst = find(root, p.val, q.val)
        if not (foundQ and foundP):
            return
        return rst


# @lc code=end
