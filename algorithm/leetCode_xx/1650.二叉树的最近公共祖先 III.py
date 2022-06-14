#
# @lc app=leetcode.cn id=1650 lang=python3
#
# [1650] 二叉树的最近公共祖先 III
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
class Node {
    int val;
    Node left;
    Node right;
    Node parent;
};


这道题其实不是公共祖先的问题，而是单链表相交的问题，你把parent指针想象成单链表的next指针，题目就变成了：
给你输入两个单链表的头结点p和q，这两个单链表必然会相交，请你返回相交点。
// TODO: 本质是 链表相交
'''


class Solution:
    # 使用模板
    def lowestCommonAncestor(p, q):
        a = p
        b = q

        while a != b:
            # a 走一步，如果走到根节点，转到 q 节点
            if not a:
                a = q
            else:
                a = a.parent

            # b 走一步，如果走到根节点，转到 p 节点
            if not b:
                b = p
            else:
                b = b.parent
        return a


# @lc code=end
