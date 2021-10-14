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


# 模拟栈
def factrial_dummy_stack(n):
    s = []

    s.append(n)
    rst = 1
    while s:
        nn = s.pop()
        if nn == 0:
            break
        else:
            rst *= nn
            s.append(nn - 1)
    return rst


num = int(input('please input a number: \n'))
print(factrial(num))
print(factrial2(num))
print(factrial_dummy_stack(num))