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
    def reverseList1(self, head: ListNode) -> ListNode:
        prev = None
        current = head

        while current:
            old_next = current.next
            current.next = prev
            prev = current
            current = old_next
        return prev

    '''
    递归 输入一个节点 head，将「以 head 为起点」的链表反转，并返回反转之后的头结点。
    '''

    def reverseList(self, head: ListNode) -> ListNode:
        # 链表为空或者只有一个节点的时候
        if not head or not head.next:
            return head
        '''
        1 -> 2 -> 3 -> 4 -> none
        ==>
        1  None <- 1 <- 2 <- 3 <- 4
        '''
        last = self.reverseList(head.next)
        head.next.next = head
        head.next = None

        return last


# @lc code=end
