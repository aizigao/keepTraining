#
# @lc app=leetcode.cn id=141 lang=python3
#
# [141] 环形链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    # 方法一：哈希表 O(n) / O(n)
    # def hasCycle(self, head: ListNode) -> bool:
    #     seen = set()
    #     while head:
    #         if head in seen:
    #             return True
    #         seen.add(head)
    #         head = head.next
    #     return False

    # 方法二：快慢指针 O(n) / O(1)
    def hasCycle(self, head: ListNode) -> bool:
        if not head or not head.next:
            return False

        slow = head
        fast = head.next

        while fast != slow:
            if not fast or not fast.next:
                return False
            fast = fast.next.next
            slow = slow.next

        return True


# @lc code=end
