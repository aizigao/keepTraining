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

N = 1005

# //a[N]里面是存数字串
# //num[i][j]表示数字串a[N]的第i位到第j位之间的数字串表示的数组
# //dp[i][j]在i个数字中插入j个加号所能形成的表达式最小值
# a[N]
# num[N][N]
# d[N][N]


def sumMin(n, m):
    # a = [i for i in range(1, n + 1)]
    # print(a)

    # # 预处理,计算i到j数字串组成的数字
    # num = [[a[j] for j in range(n)] for i in range(n)]

    # for i in range(1, n + 1):
    #     num[i][i] = a[i]


# TODO: 有点问题 看这里 https://blog.51cto.com/u_15067229/4683094
print(sumMin(6, 2))  # 102
print(sumMin(6, 1))  # 579
print(sumMin(5, 3))  # 24
