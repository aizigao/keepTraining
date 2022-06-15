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
'''
# 反转前n个节点


successor = None

// 反转以 head 为起点的 n 个节点，返回新的头结点
def reverseN(head, n):
    if n == 1:
        # 记录第 n + 1 个节点
        successor = head.next;
        return head;
    #  以 head.next 为起点，需要反转前 n - 1 个节点
    last = reverseN(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
'''


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
        successor = None

        def reverseN(head, n):
            nonlocal successor
            if n == 1:
                # 记录第 n + 1 个节点
                successor = head.next
                return head
            #  以 head.next 为起点，需要反转前 n - 1 个节点
            last = reverseN(head.next, n - 1)

            head.next.next = head
            # // 让反转之后的 head 节点和后面的节点连起来
            head.next = successor
            return last

        if left == 1:
            return reverseN(head, right)

        # 前进到反转的起点触发 base case
        head.next = self.reverseBetween(head.next, left - 1, right - 1)
        return head


# @lc code=end
