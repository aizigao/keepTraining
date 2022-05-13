#
# @lc app=leetcode.cn id=1367 lang=python3
#
# [1367] 二叉树中的列表
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubPath(self, head: ListNode, root: TreeNode) -> bool:
        # base case
        if not head:
            return True
        if not root:
            return False

        # 当前节点 等于 root
        if head.val == root.val:
            if self.check(head, root):
                return True
        # 否则开始 遍历
        return self.isSubPath(head, root.left) or self.isSubPath(
            head, root.right)

    def check(self, head, root):

        # 到头了
        if not head:
            return True
        if not root:
            return False

        if head.val == root.val:
            # 下一个节点判断
            return self.check(head.next, root.left) or self.check(
                head.next, root.right)
        return False


# @lc code=end
