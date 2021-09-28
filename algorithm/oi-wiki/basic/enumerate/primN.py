'''
小于n的 最大素数
只有两个正因数（1和自己）的自然数即为质数
'''


def getPrimN():
    n = int(input('please input a number:'))

    if n < 2:
        print('the number must large than 2')
        return

    # 由小到大便利
    primNums = [2]
    cur = 3
    while cur < n:

        flag = True

        for i in primNums:
            if cur % i == 0:
                flag = False
                break
        if flag:
            primNums.append(cur)
        cur += 2  # 素数不会为偶数

    return primNums[-1]


print(getPrimN())