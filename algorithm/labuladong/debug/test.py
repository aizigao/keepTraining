count = 0


def printIndent(n):
    for i in range(n):
        print("   ")


def dp(ring, i, key, j):
    count += 1
    printIndent(count)
    print("i = %d, j = %d\n", i, j)

    if j == len(key):
        count -= 1
        printIndent(count)
        print("return 0\n")
        return 0

    res = float('inf')
    for k in key.index[j]:
        res = min(res, dp(ring, j, key, i + 1))

    count -= 1
    printIndent(count)
    print("return %d\n", res)
    return res
