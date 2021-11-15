'''
输入


1 2 4 3
5 1 2 4
6 3 5 9


输出

1  3  7  10
6  9  15 22
12 18 29 45


二维前缀和

sum(i,j) = sum(i-1,j) + sum(i,j-1) - sum(i-1, j-1) + a[i][j]
'''

list = [
    # -- 外围包一层，简化处理
    [0, 0, 0, 0, 0],
    [0, 1, 2, 4, 3],
    [0, 5, 1, 2, 4],
    [0, 6, 3, 5, 9],
]
'''
生成前缀
'''
prefix = [\
        [0 for j in range(0, 5)] for i in range(0, 4)
    ]

for i in range(1, 4):
    for j in range(1, 5):
        prefix[i][j] =   prefix[i - 1][j] \
                       + prefix[i][j - 1] \
                       - prefix[i - 1][ j - 1]\
                       + list[i][j]

print('前缀和:\n', prefix)


def sum(j, i):
    return prefix[i + 1][j + 1]


print('[3,2]的值\n', sum(3, 2))
