'''
2
123456
1
123456
4
12345
样例输出
102
579
15
'''

data = list(range(1, 10))

symbolCount = 5


def toNum(s, start, end):
    r = s[start:end]
    strx = ''.join(str(e) for e in r)
    if strx == '':
        return 0
    return int(strx)


def sumMin(alist, m):

    n = len(alist)
    if m == 0:
        return toNum(alist, 0, n)
    elif m + 1 > n:
        return float('inf')
    else:
        min = float('inf')
        for i in range(m, n):
            temp = sumMin(alist[0:i + 1], m - 1) + toNum(alist, i + 1, n)
            if temp < min:
                min = temp
        return min


# TODO: 有点问题 看这里 https://blog.51cto.com/u_15067229/4683094
print(sumMin([1, 2, 3, 4, 5, 6], 2))  # 102
print(sumMin([1, 2, 3, 4, 5, 6], 1))  # 579
print(sumMin([1, 2, 3, 4, 5], 3))  # 24
