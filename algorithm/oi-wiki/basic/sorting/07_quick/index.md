# 快速排序

快速排序（英语：Quicksort），又称分区交换排序（英语：partition-exchange sort），简称快排，是一种被广泛运用的排序算法。



## 原理¶
快速排序的工作原理是通过 分治 的方式来将一个数组排序。

快速排序分为三个过程：

- 将数列划分为两部分（要求保证相对大小关系）；
- 递归到两个子序列中分别进行快速排序；
- 不用合并，因为此时数列已经完全有序。

和归并排序不同，第一步并不是直接分成前后两个序列，而是在分的过程中要保证相对大小关系。具体来说，第一步要是要把数列分成两个部分，然后保证前一个子数列中的数都小于后一个子数列中的数。为了保证平均时间复杂度，一般是随机选择一个数  来当做两个子数列的分界。

之后，维护一前一后两个指针p和q，依次考虑当前的数是否放在了应该放的位置（前还是后）。如果当前的数没放对，比如说如果后面的指针q遇到了一个比m小的数，那么可以交换p和q位置上的数，再把p向后移一位。当前的数的位置全放对后，再移动指针继续处理，直到两个指针相遇。

其实，快速排序没有指定应如何具体实现第一步，不论是选择m的过程还是划分的过程，都有不止一种实现方法。

第三步中的序列已经分别有序且第一个序列中的数都小于第二个数，所以直接拼接起来就好了。


- 不稳定的排序算法
- 时间复杂度
 - 快速排序的最优时间复杂度和平均时间复杂度为$O(nlogn)$，最坏时间复杂度为$O(n^2)$。
 - 对于最优情况，每一次选择的分界值都是序列的中位数，此时算法时间复杂度满足的递推式为$T(n)= 2T(\frac{n}2) + O(n)$，由主定理，$T(n)=O(nlogn)$。
 ... TODO:


```py
# Python Version
def quick_sort(alist, first, last):
    if first >= last:
        return
    mid_value = alist[first]
    low = first
    high = last
    while low < high:
        while low < high and alist[high] >= mid_value:
            high -= 1
        alist[low] = alist[high]
        while low < high and alist[low] < mid_value:
            low += 1
        alist[high] = alist[low]
    alist[low] = mid_value
    quick_sort(alist, first, low - 1)
    quick_sort(alist, low + 1, last)
```

