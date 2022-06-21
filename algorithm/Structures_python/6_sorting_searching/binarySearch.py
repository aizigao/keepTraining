def binarySearch(alist, item):
    first = 0
    last = len(alist) - 1
    found = False

    while first <= last and not found:
        midpoint = (first + last) // 2

        if alist[midpoint] == item:
            found = True
        else:
            if item < alist[midpoint]:
                last = midpoint - 1
            else:
                first = midpoint + 1

    return found


testlist = [
    0,
    1,
    2,
    8,
    13,
    17,
    19,
    32,
    42,
]
print(binarySearch(testlist, 3))
print(binarySearch(testlist, 13))


def binSearch2(nums, target):
    l = 0
    r = len(nums) - 1

    while l <= r:
        # 防止了 left 和 right 太大，直接相加导致溢出的情况。
        mid = l + (r - l) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            r = mid - 1
        elif nums[mid] < target:
            l = mid + 1

    return -1


print('x2', binSearch2(testlist, 13))
