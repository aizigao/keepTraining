#
# @lc app=leetcode.cn id=23 lang=python3
#
# [23] 合并K个升序链表
#


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # 一 顺序合并
    def mergeTwoLists(self, a, b):
        print('xxx')
        if not (a and b):
            return a if a else b
        dummy = ListNode(None)
        tail = dummy
        aPtr, bPtr = a, b

        while aPtr and bPtr:
            if aPtr.val < bPtr.val:
                tail.next = aPtr
                aPtr = aPtr.next
            else:
                tail.next = bPtr
                bPtr = bPtr.next
            tail = tail.next

        tail.next = aPtr if aPtr else bPtr
        return dummy.next

    def mergeKLists(self,
                    lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        ans = None

        for list in lists:
            ans = self.mergeTwoLists(ans, list)
        return ans


# @lc code=end
