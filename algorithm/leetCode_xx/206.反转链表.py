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
'''
// 反转链表前 N 个节点
ListNode successor = null; // 后驱节点

// 反转以 head 为起点的 n 个节点，返回新的头结点
ListNode reverseN(ListNode head, int n) {
    if (n == 1) {
        // 记录第 n + 1 个节点
        successor = head.next;
        return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    ListNode last = reverseN(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
}
'''


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
        1 -> 2 -> 3 -> 4 -> None
        ==>
        1  None <- 1 <- 2 <- 3 <- 4
        '''
        last = self.reverseList(head.next)
        head.next.next = head
        head.next = None

        return last


# @lc code=end
