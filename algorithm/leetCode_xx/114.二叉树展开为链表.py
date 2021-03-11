#
# @lc app=leetcode.cn id=114 lang=python3
#
# [114] 二叉树展开为链表
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


"""
给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
"""


class Solution:
    # -- 这个是 O(n)
    # 方法一：前序遍历
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        preorderList = list()

        def preorderTraversal(root: TreeNode):
            if not root:
                return
            preorderList.append(root)
            preorderTraversal(root.left)
            preorderTraversal(root.right)

        preorderTraversal(root)

        size = len(preorderList)

        for i in range(1, size):
            prev, curr = preorderList[i - 1], preorderList[i]
            prev.left = None
            prev.right = curr
# @lc code=end
