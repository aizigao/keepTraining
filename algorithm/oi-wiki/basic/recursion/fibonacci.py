'''
辈波那契数
斐波那契数（意大利语：Successione di Fibonacci），又译为菲波拿契数、菲波那西数、斐氏数、黄金分割数。所形成的数列称为斐波那契数列（意大利语：Successione di Fibonacci），又译为菲波拿契数列、菲波那西数列、斐氏数列、黄金分割数列。
1. 一种动物出生2天开发以每一天整度繁殖一个后代
2. 摆砖头， 1x2 砖头，摆法 
'''


def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    return fibonacci(n - 1) + fibonacci(n - 2)


# 尾递归优化
def fib2(n):
    def fib_n(curr, next, n):
        if n == 0:
            return curr
        else:
            return fib_n(next, curr + next, n - 1)

    return fib_n(0, 1, n)


def fib3(n):  # return Fibonacci series up to n
    a, b = 0, 1
    rst = 0
    while b < n:
        rst = b
        a, b = b, a + b
    return rst


num = int(input('please input a number greater than 0: '))

print(fib2(num))  # 速度上会块很多
print(fibonacci(num))
print(fib3(num))
