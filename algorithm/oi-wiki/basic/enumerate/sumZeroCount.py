# 一个数组中的数互不相同，求其中和为0的数对的个数。
# https://oi-wiki.org/basic/enumerate/

a = [
    1,
    2,
    5,
    233,
    30,
    -2,
    44,
    2,
    -1,
    -5,
]
# -- ans 2


def sumZeroCount(alist):
    ans = 0
    n = len(alist)
    for i in range(0, n):
        for j in range(0, n):
            if (a[i] + a[j] == 0):
                ans = ans + 1
    return ans


def sumZeroCount2(alist):
    ans = 0
    n = len(alist)
    for i in range(0, n):
        for j in range(0, i):
            if a[i] + a[j] == 0:
                ans = ans + 1
    return ans


def sumZeroCount3(alist):
    MAXN = max(alist)
    n = len(alist)
    ans = 0

    met = [False] * MAXN * 2 + [False]
    for i in range(0, n):
        if met[MAXN - a[i]]:
            ans = ans + 1
        met[a[i] + MAXN] = True
    return ans


print('001 没有考虑顺序', sumZeroCount(a))
print('002 枚举的范围优化', sumZeroCount2(a))
print('003 记录', sumZeroCount3(a))
