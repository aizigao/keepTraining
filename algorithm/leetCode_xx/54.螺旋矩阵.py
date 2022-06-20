#
# @lc app=leetcode.cn id=54 lang=python3
#
# [54] 螺旋矩阵
#


# @lc code=start
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        rows = len(matrix)
        columns = len(matrix[0])
        res = []

        l = 0
        u = 0
        b = rows - 1
        r = columns - 1

        while len(res) < columns * rows:
            # 在项部 从左到右
            if u <= b:
                for j in range(l, r + 1):
                    res.append(matrix[u][j])
                u += 1

            # 在右侧 从上到下
            if l <= r:
                for i in range(u, b + 1):
                    res.append(matrix[i][r])
                r -= 1

            # 在下侧 从右到左
            if u <= b:
                for j in range(r, l - 1, -1):
                    res.append(matrix[b][j])
                b -= 1

            # 在左侧 从下到上
            if l <= r:
                for i in range(b, u - 1, -1):
                    res.append(matrix[i][l])
                l += 1
        return res


# @lc code=end
