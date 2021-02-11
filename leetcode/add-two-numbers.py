# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
      head = None
      tail = None
      carry = 0

      while l1 or l2:
        n1 = l1.val if l1 else 0
        n2 = l2.val if l2 else 0
        sum = n1 + n2 + carry

        if not head:
          tail = ListNode(sum % 10)
          head = tail
        else:
          tail.next = ListNode(sum % 10)
          tail = tail.next
        carry = floor(sum / 10)

        if l1:
          l1 = l1.next
        if l2:
          l2 = l2.next
      if carry > 0:
        tail.next = ListNode(carry)
      return head
        