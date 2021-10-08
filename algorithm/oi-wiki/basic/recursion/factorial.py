# 阶乘


def factrial(n):
    if n == 0:
        return 1
    else:
        return n * factrial(n - 1)


print(factrial(int(input('please input a number: \n'))))