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
            if v != vals[n - i - 1]:
                return False
        return True

    # 方法二：递归
    # O(n) / O(1)
    '''
    void traverse(ListNode head) {
        // 前序遍历代码
        traverse(head.next);
        // 后序遍历代码
    }
    '''

    # 东哥 前后序 递归
    def isPalindrome2(self, head: ListNode) -> bool:

        left = head

        def reverse(right):
            nonlocal left
            if not right:
                return True
            res = reverse(right.next)
            # 后序
            res = res and right.val == left.val
            left = left.next
            return res

        return reverse(head)

    # TODO: 再看看其它的方法
    # 快慢指针
    '''
    odd 
    1 -> 2 -> 3 -> 2 -> 1
              s         f
    even
    1 -> 2 -> 2 -> 1 -> none
              s          f
    '''

    def isPalindrome(self, head: ListNode) -> bool:
        def reverse(head):
            pre = None
            cur = head
            while cur:
                next = cur.next
                cur.next = pre
                pre = cur
                cur = next
            return pre

        slow, fast = head, head
        # ----- 找到中点 -------
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # 如果fast指针没有指向null，说明链表长度为奇数，slow还要再前进一步：
        if fast:
            slow = slow.next

        # --------------
        left = head
        last = right = reverse(slow)

        while right:
            if left.val != right.val:
                return False
            p = left
            left = left.next
            right = right.next
        # 恢复链表
        left.next = reverse(last)

        return True


# @lc code=end
