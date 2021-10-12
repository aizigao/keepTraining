import math

# 分数
s = [
    [1, 1, 1, 1, 1, 1, 1, 3],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    #
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 3],
]

# 1,1 到 i,j 分数之和
sum = [[0 for j in range(0, 9)] for i in range(0, 9)]

# res[15][9][9][9][9] fun 记录表
# res[n][x1][y1][x2][y2] fun 记录表
res = [[[[[-1 for y2 in range(0, 9)] \
                for x2 in range(0, 9)]  \
                    for y1 in range(0, 9)] \
                        for x1 in range(0, 9)] \
                            for n in range(0, 15)]


# (x1,y1) -> （x2,y2） 的 分数和
def calSum(x1, y1, x2, y2):
    return sum[x2][y2] - sum[x2][y1 - 1] - \
           sum[x1 - 1][y2] + sum[x1 - 1][y1 - 1]


def spliceChess(n, x1, y1, x2, y2):
    min_rst = float('inf')

    # 查找 dp
    if res[n][x1][y1][x2][y2] != -1:
        return res[n][x1][y1][x2][y2]

    # base
    if n == 1:
        t = calSum(x1, y1, x2, y2)
        res[n][x1][y1][x2][y2] = t * t
        return t * t

    # x 轴最小值
    for a in range(x1, x2):
        c = calSum(a + 1, y1, x2, y2)
        e = calSum(x1, y1, a, y2)

        t = min(
            # --
            spliceChess(n - 1, x1, y1, a, y2) + c * c,
            spliceChess(n - 1, a + 1, y1, x2, y2) + e * e
            #--
        )

        if min_rst > t:
            min_rst = t

    for b in range(y1, y2):
        c = calSum(x1, b + 1, x2, y2)
        e = calSum(x1, y1, x2, b)

        t = min(
            # --
            spliceChess(n - 1, x1, y1, x2, b) + c * c,
            spliceChess(n - 1, x1, b + 1, x2, y2) + e * e
            #--
        )
        if min_rst > t:
            min_rst = t

    res[n][x1][y1][x2][y2] = min_rst
    return min_rst


def main(n):
    # 生成 sum
    for i in range(1, 9):
        rowsum = 0
        for j in range(1, 9):
            rowsum += s[i - 1][j - 1]
            sum[i][j] = sum[i - 1][j] + rowsum

    # 下面都是方程推导出来的，不用管，只要关心"和"的平方
    result = n * spliceChess(n, 1, 1, 8, 8) - sum[8][8] * sum[8][8]
    print('rst %10.3f' % (math.sqrt(result / (n * n))))


# 3 ——> 1.633
main(3)