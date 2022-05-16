## 单链表有很多巧妙的操作 (双指针)

-   21. 合并两个有序链表
-   23.合并 k 个有序链表
-   寻找单链表的倒数第 k 个节点
-   寻找单链表的中点
-   判断单链表是否包含环并找出环起点
-   判断两个单链表是否相交并找出交点

合并两个有序链表

```py

def margeTwoList(l1, l2):
    dummy = listNode(None)
    p = dummy
    p1 = l1
    p2 = l2

    while p1 and p2:
        if p1.val > p2.val:
            p.next = p2
            p2 = p2.next
        else:
            p.next = p1
            p1 = p1.next

    if p1:
        p.next = p1
    if p2:
        p.next = p2
    return dummy.next
```
