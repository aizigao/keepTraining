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
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
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

        ret = 0
        for r in range(rows):
            for c in range(columns):
                if matrix[r][c] == '1':
                    width = left[r][c]
                    area = width
                    for k in range(r - 1, -1, -1):
                        width = min(width, left[k][c])
                        area = max(area, width * (r - k + 1))
                    ret = max(area, ret)
        return ret


# @lc code=end
