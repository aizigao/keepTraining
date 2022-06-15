#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] 相交链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
'''
a1->a2->a3
         |
         |----> c1,c2,c3
b1->b2---|

a1,a2,a3 -> c1,c2,c3 -> b1,b2 -> c1(oops)
b1,b2 -> c1,c2,c3 -> a1,a2,a3 -> c1(oops)

'''


class Solution:
    def getIntersectionNode(self, headA: ListNode,
                            headB: ListNode) -> ListNode:
        A, B = headA, headB
        while A != B:
            A = A.next if A else headB
            B = B.next if B else headA
        return A


# @lc code=end
