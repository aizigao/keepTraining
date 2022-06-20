#
# @lc app=leetcode.cn id=59 lang=python3
#
# [59] 螺旋矩阵 II
#

# @lc code=start


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0 for j in range(n)] for i in range(n)]
        u = l = 0
        r = b = n - 1
        num = 1

        while num <= n * n:
            #  up side left to right
            if u <= b:
                for j in range(l, r + 1):
                    matrix[u][j] = num
                    num += 1
                u += 1
            # rgiht side up to bottom
            if l <= r:
                for i in range(u, b + 1):
                    matrix[i][r] = num
                    num += 1
                r -= 1

            #  bottom side right to left
            if u <= b:
                for j in range(r, l - 1, -1):
                    matrix[b][j] = num
                    num += 1
                b -= 1

            # left side bottom to up
            if l <= r:
                for i in range(b, u - 1, -1):
                    matrix[i][l] = num
                    num += 1
                l += 1

        return matrix


# @lc code=end
