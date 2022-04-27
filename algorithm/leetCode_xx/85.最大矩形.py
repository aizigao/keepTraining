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
        m = len(matrix)
        n = len(matrix[0])

        left = [[0 for j in range(n)] for i in range(m)]

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '1':
                    if j == 0:
                        left[i][j] = 1
                    else:
                        left[i][j] = left[i][j - 1] + 1

        ret = 0

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '0':
                    continue
                width = left[i][j]
                area = width

                for k in range(i - 1, -1, -1):
                    width = min(width, left[k][j])
                    area = max(area, (i - k + 1) * width)

                ret = max(ret, area)
        return ret


# @lc code=end
