#
# @lc app=leetcode.cn id=206 lang=python3
#
# [206] 反转链表
#
"""
https://leetcode-cn.com/problems/reverse-linked-list/solution/
"""

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        current = head

        while current:
            old_next = current.next
            current.next = prev
            prev = current
            current = old_next
        return prev


# @lc code=end
