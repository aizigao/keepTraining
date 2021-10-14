data = [
    # ---
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5]
]

rows = len(data)
dp = [[-1 for j in range(rows)] \
            for i in range(rows)]


def maxSum(i, j):
    if dp[i][j] > -1:
        return dp[i][j]
    if i == rows - 1:
        return data[i][j]
    left = maxSum(i + 1, j)
    right = maxSum(i + 1, j + 1)
    cur_v = data[i][j] + max(left, right)
    dp[i][j] = cur_v
    return cur_v


rst = maxSum(0, 0)
print(rst)  # 30


# ------------------------
# 方法二
# 递推 人人为我, 从底到上
def maxSum2():
    i = rows - 2
    while i > -1:
        for j in range(len(data[i])):
            data[i][j] = data[i][j] + max(\
                data[i+1][j],
                data[i+1][j+1]
            )
            j += 1
        i -= 1
    return data[0][0]


print(maxSum2())