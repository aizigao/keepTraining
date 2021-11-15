# 1 2 3 4 5
# ==> 1 3 6 10 15


def main(alist):
    if not alist:
        return []
    size = len(alist)
    nlist = [None] * size
    nlist[0] = alist[0]

    for i in range(1, size):
        nlist[i] = nlist[i - 1] + alist[i]
    return nlist


print(main([1, 2, 3, 4, 5]))
