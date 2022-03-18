# One note about shifting versus exchanging is also important. In general, a shift operation requires approximately a third of the processing work of an exchange since only one assignment is performed. In benchmark studies, insertion sort will show very good performance.
def insertionSort(alist):
    n = len(alist)

    for i in range(1, n):
        cur = alist[i]
        j = i - 1

        # 当alist[j]> cur时，全部后移
        while j > 0 and alist[j] > cur:
            alist[j + 1] = alist[j]
            j -= 1
        # j 多移一位，恢复一下
        alist[j + 1] = cur
    return alist


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
print(insertionSort(alist))
