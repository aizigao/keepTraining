def mergeSort(alist):
    n = len(alist)
    if n <= 1:
        return
    mid = n // 2
    L = alist[:mid]
    R = alist[mid:]
    mergeSort(L)
    mergeSort(R)

    l, r, k = 0, 0, 0

    while l < len(L) and r < len(R):
        if L[l] < R[r]:
            alist[k] = L[l]
            l += 1
        else:
            alist[k] = R[r]
            r += 1
        k + 1

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
