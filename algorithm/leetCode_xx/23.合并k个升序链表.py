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

import queue


def mergeSort(a, b):
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


# 方法一, 顺序合并
'''

- 时间复杂度：故渐进时间复杂度为 O(k^2 n)
- 空间复杂度：没有用到与 k 和 n 规模相关的辅助空间，故渐进空间复杂度为 O(1)。
'''


class Solution1:
    def mergeKLists(self,
                    lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        ans = None

        for list in lists:
            ans = mergeSort(ans, list)
        return ans


## 方法二 分治合并
class Solution2:
    def merge(self, lists, l, r):

        if l == r:
            return lists[l]
        if l > r:
            return None

        mid = (l + r) // 2
        return mergeSort(self.merge(lists, l, mid),
                         self.merge(lists, mid + 1, r))

    def mergeKLists(self,
                    lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        return self.merge(lists, 0, len(lists) - 1)


## 方法三： 使用优先队列合并 TODO:
'''
这个方法和前两种方法的思路有所不同，我们需要维护当前每个链表没有被合并的元素的最前面一个，k 个链表就最多有 k 个满足这样条件的元素，每次在这些元素里面选取 val 属性最小的元素合并到答案中。在选取最小元素的时候，我们可以用优先队列来优化这个过程。
'''


class Solution:
    def mergeKLists(self,
                    lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        pass


# @lc code=end
