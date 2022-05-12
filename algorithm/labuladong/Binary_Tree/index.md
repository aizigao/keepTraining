# 二叉树解题的思维模式分两类

https://labuladong.github.io/algo/1/4/

-   是否可以通过遍历一遍二叉树得到答案
-   递归函数 通过子树推导出答案

快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历

快排

```py
def sort(nums, lo, hi):
    # ------- 前序遍历位置
    p = partition(nums,ol,hi)
    # ------- end 前序遍历位置

    sort(nums, lo, p-1)
    sort(nums, p+1, hi)
```

归并

```py
def sort(nums, ol, hi):
    mid = (ol, hi) //2

    # sort nums[lo..mid]
    sort(nums, lo, mid)

    # sort nums[mid+1..hi]
    sort(nums, mid+1, hi)


    # ------------ 后序位置 ---
    # 合并 nums[lo..mid] 和 nums[mid+1..hi]
    marge(nums, lo, mid, hi)
    # ------------ 后序位置 ---
```

```py
def traverse(root):
    if not root:
        return
    # 前序位置
    travase(root.left)
    # 中序位置
    travase(root.right)
    # 后序位置

```

```py
'''
遍历数组
'''
def traverse(arr: int[]):
    for i in arr:
        pass
def traverse(arr: int[],i):
    if i == len(arr):
        return
    # 前序
    traverse(arr, i+1)
    # 后序

'''
遍历单链表
'''
def traverse(head: ListNode):
    p = head
    while p:
        p = p.next

def traverse(head: ListNode):
    if not head:
        return
    # 前序
    traverse(head.next)
    # 后序

```

你也注意到了，只要是递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后。

![](images/2022-05-12-20-21-12.png)

-   所谓前序位置，就是刚进入一个节点（元素）的时候，
-   后序位置就是即将离开一个节点（元素）的时候

倒序打印一条单链表上所有节点的值

```py
def traverse(head):
    if not head:
        return
    traverse(head.next)

    # 后序位置
    print(head.val)
```

-   前序位置的代码在刚刚进入一个二叉树节点的时候执行；
-   后序位置的代码在将要离开一个二叉树节点的时候执行；
-   中序位置的代码在一个二叉树节点左子树都遍历完，即将开始遍历右子树的时候执行

![](images/2022-05-12-20-24-54.png)

# leet code 104 最大深度

```py
res = 0
depth = 0

def maxDpth(root):
    traverse(root)
    return res

def traverse(root):
    if not root:
        return
    # 前序位置
    depth+=1

    # 到达叶子节点, 更新最大深度
    if not root.left and not root.right:
        res = max(res, depth)
    traverse(root.left)
    traverse(root.right)
    # 后序位置
    depth -=1
```
