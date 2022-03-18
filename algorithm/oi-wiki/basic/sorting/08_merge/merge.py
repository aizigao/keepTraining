def mergeSort(alist):
    n = len(alist)
    if n <= 1:
        return

    # 拆成左右两组
    mid = n // 2
    L = alist[:mid]
    R = alist[mid:]

    # 分别排序
    mergeSort(L)
    mergeSort(R)

    l, r, k = 0, 0, 0

    # 合并
    # 1. 左，右各取一个，小的放到结果中，然后 loop 
    while l < len(L) and r < len(R):
        if L[l] < R[r]:
            alist[k] = L[l]
            l += 1
        else:
            alist[k] = R[r]
            r += 1
        k + 1

    # 左，右后已经取完了，要把剩余的内容放到结果中
    while l < len(L):
        alist[k] = L[l]
        l += 1
        k + 1

    while r < len(R):
        alist[k] = R[r]
        r += 1
        k + 1


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
mergeSort(alist)
print(alist)
