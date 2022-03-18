def countingSort(a):

    # 统计每个数出现在个数, 将最小数值为0, c数组大小缩小到 max-min
    a_min = min(a)
    k = max(a) - a_min + 1

    # 统计数组中每个值为 i 的元素出现的次数，存入数组 C 的第 i 项
    c = [0 for _ in range(k)]
    for i in a:
        c[i - a_min] += 1

    # 对所有的计数累加, 值标识前面有多少项
    for i, v in enumerate(c):
        if i == 0:
            continue
        c[i] = v + c[i - 1]

    # 将每个元素 i 放在新数组的第 C[i]项，每放一个元素就将 C1 减去 1
    result = [None for _ in range(len(a))]
    for i in a:
        result[c[i - a_min] - 1] = i
        # 清空这一项
        c[i - a_min] -= 1

    return result


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
print(countingSort(alist))
