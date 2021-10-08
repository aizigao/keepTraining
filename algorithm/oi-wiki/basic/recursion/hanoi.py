def hnoni(n, x, y, z):
    if n == 0:
        return 0
    else:
        pre = hnoni(n - 1, x, z, y)
        print("%c -> %c" % (x, y))
        next = hnoni(n - 1, z, y, x)

        return pre + next + 1


n = int(input('please input a number:'))

rst = hnoni(n, 'A', "B", 'C')
# 2^n -1
print("总数 %d" % rst)
