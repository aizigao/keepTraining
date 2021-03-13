#
# @lc app=leetcode.cn id=142 lang=python3
#
# [142] 环形链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


"""
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

"""


class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:

        if not head or not head.next:
            return None

        fast = head
        slow = head

        # 相遇点不是环点
        # fast 的走过的距离为
        # a+n(b+c)+b = a+(n+1)b+nc
        # fast 指针走过的距离都为slow 指针的 22 倍
        # a+(n+1)b+nc=2(a+b)
        while fast:
            if not fast.next:
                return None
            fast = fast.next.next
            slow = slow.next

            # 相遇后，再设置一个针，相等就是环点
            if fast and fast == slow:
                ptr = head
                while ptr != slow:
                    ptr = ptr.next
                    slow = slow.next
                return ptr

        return None

# @lc code=end
