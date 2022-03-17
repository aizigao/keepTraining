# // O(n^2)


def selectionSort(alist):
    for fillslot in range(len(alist) - 1, 0, -1):
        positionOfMax = 0
        for location in range(1, fillslot + 1):
            if alist[location] > alist[positionOfMax]:
                positionOfMax = location

        temp = alist[fillslot]
        alist[fillslot] = alist[positionOfMax]
        alist[positionOfMax] = temp
    return alist


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]


def selectSort2(aList):
    n = len(alist)
    for i in range(n):
        # find min of rest
        min_of_rest_idx = i
        for j in range(i, n):
            if aList[j] < aList[min_of_rest_idx]:
                min_of_rest_idx = j

        # replace
        aList[i], aList[min_of_rest_idx] = aList[min_of_rest_idx], aList[i]
    return aList


print(selectionSort(alist.copy()))
print(selectSort2(alist.copy()))
print(alist)
