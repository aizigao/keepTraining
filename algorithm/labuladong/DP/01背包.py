'''
给你一个可装载重量为 W 的背包和 N 个物品，每个物品有重量和价值两个属性。
其中第 i 个物品的重量为 wt[i]，价值为 val[i]，现在让你用这个背包装物品，最多能装的价值是多少？
'''

N = 3
W = 4

wt = [2, 1, 3]
val = [4, 2, 3]

# 1. 明确状态与选择
# 状态 --> 变化 --> 随进行而缩小或扩大的值
# 选择 --> 最后的择优

'''
状态: 重量 与 物品
选择： 加与不加
'''

# 1. 明确DP 数组含义

'''
dp[i][w] 对于前 i 个物品， 当前背包容量为 w, 可以装下的最大值
'''


# N x W
dp = [[0 for w in range(W+1)] for i in range(N+1)]


for i in range(1, N+1):
    for w in range(1, W+1):
        # 选择 把物品 i 装进背包, 不把物品 i 装进背包

        # 边界 w - wt[i-1] < 0

        if w - wt[i-1] < 0:
            dp[i][w] = dp[i-1][w]
        else:
            dp[i][w] = max(
                dp[i-1][w],  # 不装
                val[i-1] + dp[i-1][w - wt[i-1]]
            )


print(dp[N][W])  # 6
