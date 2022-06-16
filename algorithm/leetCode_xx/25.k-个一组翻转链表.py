#
# @lc app=leetcode.cn id=25 lang=python3
#
# [25] K 个一组翻转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


def reverse(head, end) -> ListNode:
    prev = None
    current = head

    # 注意这里
    while current != end:
        old_next = current.next
        current.next = prev
        prev = current
        current = old_next
    return prev


class Solution:
    def reverseKGroup(self, head: Optional[ListNode],
                      k: int) -> Optional[ListNode]:

        if not head:
            return

        a = b = head

        for i in range(0, k):
            # // 不足 k 个，不需要反转，base case
            if not b:
                return head
            b = b.next

        # 反转前 k 个元素
        newHead = reverse(a, b)

        # 递归反转后续链表并连接起来
        a.next = self.reverseKGroup(b, k)
        return newHead


# @lc code=end
