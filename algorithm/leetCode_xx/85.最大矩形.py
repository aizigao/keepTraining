#
# @lc app=leetcode.cn id=85 lang=python3
#
# [85] 最大矩形
#

# @lc code=start


class Solution:
    '''
    方法一: 使用柱状图的优化暴力方法
    @hint Time Limit Exceeded

    时间: O(m^2*n)
    空间: O(m*n)
    '''
    def maximalRectangle1(self, matrix: List[List[str]]) -> int:
        if not matrix:
            return 0

        rows = len(matrix)
        columns = len(matrix[0])

        left = [[0 for c in range(columns)] for r in range(rows)]

        for r in range(rows):
            for c in range(columns):
                if matrix[r][c] == '1':
                    if r == 0 and c == 0:
                        left[r][c] = 1
                    else:
                        left[r][c] = left[r][c - 1] + 1

        rst = 0
        for r in range(rows):
            for c in range(columns):
                if matrix[r][c] == '1':
                    width = left[r][c]
                    area = width
                    for k in range(r - 1, -1, -1):
                        width = min(width, left[k][c])
                        area = max(area, width * (r - k + 1))
                    rst = max(area, rst)
        return rst

    '''
    方法二
    单调栈
    '''

    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix:
            return 0

        m = len(matrix)
        n = len(matrix[0])

        left = [[0 for c in range(n)] for r in range(m)]

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '1':
                    if i == 0 and j == 0:
                        left[i][j] = 1
                    else:
                        left[i][j] = left[i][j - 1] + 1

        ret = 0

        for j in range(n):
            up = [0] * m
            down = [0] * m
            stack = []
            for i in range(m):
                while stack and left[stack[-1]][j] >= left[i][j]:
                    stack.pop()
                up[i] = stack[-1] if stack else -1
                stack.append(i)

            stack = []
            for i in range(m - 1, -1, -1):
                while stack and left[stack[-1]][j] >= left[i][j]:
                    stack.pop()
                down[i] = stack[-1] if stack else m
                stack.append(i)

            for i in range(m):
                height = down[i] - up[i] - 1
                area = left[i][j] * height
                ret = max(ret, area)
        return ret


# @lc code=end
