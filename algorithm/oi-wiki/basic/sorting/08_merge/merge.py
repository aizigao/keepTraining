def mergeSort(alist):
    size = len(alist)
    if size <= 1:
        return alist
    mid = size // 2
    left_list = alist[:mid]
    l_size = len(left_list)
    right_list = alist[mid:]
    r_size = len(right_list)

    mergeSort(left_list)
    mergeSort(right_list)

    l, r, k = 0, 0, 0

    while l < l_size and r < r_size:
        if left_list[l] <= right_list[r]:
            alist[k] = left_list[l]
            l += 1
        else:
            alist[k] = right_list[r]
            r += 1
        k += 1
    while l < l_size:
        alist[k] = left_list[l]
        l += 1
        k += 1
    while r < r_size:
        alist[k] = right_list[r]
        r += 1
        k += 1


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
mergeSort(alist)
print(alist)
