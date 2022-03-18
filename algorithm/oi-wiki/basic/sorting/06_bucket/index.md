# 桶排序

桶排序（英文：Bucket sort）是排序算法的一种，适用于待排序数据值域较大但分布比较均匀的情况。

## 工作原理

桶排序按下列步骤进行：

-   设置一个定量的数组当作空桶；
-   遍历序列，并将元素一个个放到对应的桶中；
-   对每个不是空的桶进行排序；
-   从不是空的桶里把元素再放回原来的序列中。

## 稳定性

如果使用稳定的内层排序，并且将元素插入桶中时不改变元素间的相对顺序，那么桶排序就是一种稳定的排序算法。

由于每块元素不多，一般使用插入排序。此时桶排序是一种稳定的排序算法。

## 时间复杂度

桶排序的平均时间复杂度为$O(n+n^2/k+k)$（将值域平均分成 n 块 + 排序 + 重新合并元素），当$k \approx n$时为$O(n)$ 。

桶排序的最坏时间复杂度为$O(n^2)$。

```py
# Python Version
N = 100010
w = n = 0
a = [0] * N
bucket = [[] for i in range(N)]

def insertion_sort(A):
    for i in range(1, len(A)):
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key:
            A[j + 1] = A[j]
            j -= 1
        A[j + 1] = key

def bucket_sort():
    bucket_size = int(w / n + 1)
    for i in range(0, n):
        bucket[i].clear()
    for i in range(1, n + 1):
        bucket[int(a[i] / bucket_size)].append(a[i])
    p = 0
    for i in range(0, n):
        insertion_sort(bucket[i])
        for j in range(0, len(bucket[i])):
            a[p] = bucket[i][j]
            p += 1
```
