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

        preorderList = []

        def preOrderTraversal(root):
            if not root:
                return
            preorderList.append(root)
            preOrderTraversal(root.left)
            preOrderTraversal(root.right)
        preOrderTraversal(root)

        n = len(preorderList)

        for i in range(1, n):
            prev, curr = preorderList[i-1], preorderList[i]
            prev.left = None
            prev.right = curr

    # 迭代实现前序遍历
    def flatten_2(self, root: TreeNode) -> None:
        preorderList = list()

        stack = list()
        node = root
        while node or stack:
            while node:
                # ---
                preorderList.append(node)
                # ---

                stack.append(node)
                node = node.left
            node = stack.pop()
            node = node.right

        size = len(preorderList)
        for i in range(1, size):
            prev, curr = preorderList[i - 1], preorderList[i]
            prev.left = None
            prev.right = curr

    # 方法三：寻找前驱节点 O(n) / O(1) 这个不看了，
    def flatten_3(self, root: TreeNode) -> None:
        curr = root
        while curr:
            if curr.left:
                predecessor = nxt = curr.left
                while predecessor.right:
                    predecessor = predecessor.right
                predecessor.right = curr.right
                curr.left = None
                curr.right = nxt
            curr = curr.right


# @lc code=end
