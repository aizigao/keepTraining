# https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/

# 方法一：哈希表


# 方法二：快慢指针
'''
a+n(b+c)+b=a+(n+1)b+nc
'''



# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head):
        if not head:
            return None
        # ---

        slow = head
        fast = head

        while fast:
            slow = slow.next

            if fast.next:
                fast = fast.next.next
            else:
                # 没有next 所明没有环
                return None
            
            if fast == slow:
                # 走个n圈后相遇
                ptr = head
                while ptr is not slow:
                    ptr = ptr.next
                    slow = slow.next
                return ptr
        return None

        