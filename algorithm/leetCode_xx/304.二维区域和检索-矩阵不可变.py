#
# @lc app=leetcode.cn id=304 lang=python3
#
# [304] 二维区域和检索 - 矩阵不可变
#


# @lc code=start
class NumMatrix:
    # 初始化时 完成 前缀和
    def __init__(self, matrix: List[List[int]]):
        r = len(matrix) + 1
        c = len(matrix[0]) + 1
        preSum = [[0 for j in range(c)] for i in range(r)]

        self.preSum = preSum
        for i in range(1, r):
            for j in range(1, c):
                #  计算每个矩阵 [0, 0, i, j] 的元素和
                preSum[i][j] =  preSum[i    ][j - 1] + \
                                preSum[i - 1][j    ] + \
                                matrix[i - 1][j - 1] - \
                                preSum[i - 1][j - 1]

    def sumRegion(self, x1: int, y1: int, x2: int, y2: int) -> int:
        preSum = self.preSum
        return preSum[x2 + 1][y2 + 1] \
             - preSum[x1][y2 + 1] \
             - preSum[x2 + 1][y1] \
             + preSum[x1][y1]


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
# @lc code=end
