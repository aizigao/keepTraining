#
# @lc app=leetcode.cn id=92 lang=python3
#
# [92] 反转链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseBetween1(self, head: ListNode, left: int,
                        right: int) -> ListNode:
        # 设置 dummyNode 是这一类问题的一般做法
        dummy_node = ListNode(-1)
        dummy_node.next = head
        pre = dummy_node

        # 移动到 左边减一节点
        for _ in range(left - 1):
            pre = pre.next

        # 在 区间 内反转
        cur = pre.next
        for _ in range(right - left):
            oldNext = cur.next
            cur.next = oldNext.next
            oldNext.next = pre.next
            pre.next = oldNext
        return dummy_node.next

    def reverseBetween(self, head: ListNode, left: int,
                       right: int) -> ListNode:
        pass


# @lc code=end
