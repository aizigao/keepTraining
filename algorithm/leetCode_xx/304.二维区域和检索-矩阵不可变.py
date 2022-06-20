#
# @lc app=leetcode.cn id=304 lang=python3
#
# [304] 二维区域和检索 - 矩阵不可变
#


# @lc code=start
class NumMatrix:
    # 初始化时 完成 前缀和
    def __init__(self, matrix: List[List[int]]):
        rows = len(matrix)
        columns = len(matrix[0])

        # 计算前缀和
        preSum = [[0 for c in range(columns + 1)] for r in range(rows + 1)]
        for r in range(1, rows + 1):
            for c in range(1, columns + 1):
                preSum[r][c] = preSum[r - 1][c] + preSum[r][c - 1] + matrix[
                    r - 1][c - 1] - preSum[r - 1][c - 1]
        self.preSum = preSum

    def sumRegion(self, x1: int, y1: int, x2: int, y2: int) -> int:
        preSum = self.preSum
        return preSum[x2 + 1][y2 + 1] - preSum[x2 + 1][y1] - preSum[x1][
            y2 + 1] + preSum[x1][y1]


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
# @lc code=end
