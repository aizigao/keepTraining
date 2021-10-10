# 阶乘


def factrial(n):
    if n == 0:
        return 1
    else:
        return n * factrial(n - 1)


# 从底到上的 非递归式
def factrial2(n):
    rst = 1
    for i in range(2, n + 1):
        rst = rst * i
    return rst


num = int(input('please input a number: \n'))
print(factrial(num))
print(factrial2(num))