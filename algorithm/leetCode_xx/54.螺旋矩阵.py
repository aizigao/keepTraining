#
# @lc app=leetcode.cn id=54 lang=python3
#
# [54] 螺旋矩阵
#


# @lc code=start
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m = len(matrix)
        n = len(matrix[0])

        upper_bound = 0
        lower_bound = m - 1
        left_bound = 0
        right_bound = n - 1
        res = []

        # len(res) === m*n 遍历完成

        while len(res) < m * n:
            # 在项部 left to right
            if upper_bound <= lower_bound:
                for j in range(left_bound, right_bound + 1):
                    res.append(matrix[upper_bound][j])
                upper_bound += 1

            # 在右侧 up to bottom
            if left_bound <= right_bound:
                for i in range(upper_bound, lower_bound + 1):
                    res.append(matrix[i][right_bound])
                right_bound -= 1

            # 在底部从右向左遍历
            if upper_bound <= lower_bound:
                for j in range(right_bound, left_bound - 1, -1):
                    res.append(matrix[lower_bound][j])
                lower_bound -= 1

            # 在左侧 bototm to up
            if left_bound <= right_bound:
                for i in range(lower_bound, upper_bound - 1, -1):
                    res.append(matrix[i][left_bound])
                left_bound += 1
        return res


# @lc code=end
