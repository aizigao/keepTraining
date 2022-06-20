#
# https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
# @lc app=leetcode.cn id=48 lang=python3
#
# [48] 旋转图像
#
'''
对于矩阵中第 i 行的第 j 个元素，在旋转后，它出现在倒数第 i 列的第  j  个位置。
'''


# @lc code=start
class Solution:
    # -- 临时数组
    def rotate1(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        n = len(matrix)
        matrix_new = [[0] * n for _ in range(n)]

        for i in range(n):
            for j in range(n):
                matrix_new[j][n - i - 1] = matrix_new[i][j]

        # 不能写为 matrix = matrix_new
        matrix_new[:] = matrix_new

    # -- 原地一
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        for i in range(n // 2):
            for j in range((n + 1) // 2):
                temp = matrix[i][j]
                matrix[i][j] = matrix[n - j - 1][i]
                matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
                matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
                matrix[j][n - i - 1] = temp

    # 方法三：用翻转代替旋转
    def rotate3(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        # 水平翻转
        for i in range(n // 2):
            for j in range(n):
                matrix[i][j], matrix[n - i - 1][j] = matrix[n - i -
                                                            1][j], matrix[i][j]
        # 主对角线翻转
        for i in range(n):
            for j in range(i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]


# @lc code=end
