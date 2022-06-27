from turtle import left


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


def left_bound(nums, target):
    if not nums:
        return -1
    l = 0
    r = len(nums)  # 做 [0, end) 搜索

    while l < r:  # [start, end)
        mid = l + (r - l) // 2
        if nums[mid] == target:
            r = mid
        elif nums[mid] < target:
            l = mid + 1
        elif nums[mid] > target:
            r = mid  # 「搜索区间」是 [left, right) 左闭右开
    # 跳出 while后 l == r

    # if left == nums.length: return -1
    # return left if nums[left] == target else -1
    return l


print(left_bound([1, 2, 2, 2, 3], 2))  # 1
print(left_bound([2, 3, 5, 7], 8))  # 4


def right_bound(nums, target):
    if not nums:
        return -1
    l = 0
    r = len(nums)

    while l < r:
        mid = l + (r - l) // 2

        if nums[mid] == target:
            # 不要立即返回，而是增大「搜索区间」的左边界 left
            left = mid + 1  # @1
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    return left - 1  # -1 是为了恢复 @1
