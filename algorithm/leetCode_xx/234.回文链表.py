#
# @lc app=leetcode.cn id=234 lang=python3
#
# [234] 回文链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    # 方法一：将值复制到数组中后用双指针法
    # O(n) / O(n)
    def isPalindrome1(self, head: ListNode) -> bool:
        vals = []
        current = head

        while current:
            vals.append(current.val)
            current = current.next
        # return vals == vals[::-1]
        n = len(vals)
        for i, v in enumerate(vals):
            if v != vals[n - i-1]:
                return False
        return True

    # 方法二：递归
    # O(n) / O(1)
    def isPalindrome(self, head: ListNode) -> bool:

        self.front_pointer = head

        def recursively_check(current_node=head):
            if current_node is not None:
                if not recursively_check(current_node.next):
                    return False
                if self.front_pointer.val != current_node.val:
                    return False
                self.front_pointer = self.front_pointer.next
            return True

        return recursively_check()
    # TODO: 再看看其它的方法


# @lc code=end
