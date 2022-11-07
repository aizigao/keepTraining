#
# @lc app=leetcode.cn id=51 lang=python3
#
# [51] N 皇后
#

from typing import List
# @lc code=start
'''
皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位。
'''


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        self.res = []
        board = ['.' * n for i in range(n)]
        self.backtrack(board, 0)
        return self.res

    # // 路径：board 中小于 row 的那些行都已经成功放置了皇后
    # // 选择列表：第 row 行的所有列都是放置皇后的选择
    # // 结束条件：row 超过 board 的最后一行

    def backtrack(self, board, row):
        if row == len(board):
            self.res.append(board[:])
            return

        n = len(board[row])

        for col in range(n):
            # 排除不合法
            if not self.isValid(board, row, col):
                continue
            # select
            # board[row][col] = 'Q'
            board[row] = board[row][:col] + 'Q' + board[row][col+1:]
            self.backtrack(board, row + 1)
            # unselect
            # board[row][col] = '.'
            board[row] = board[row][:col] + '.' + board[row][col+1:]

    def isValid(self, board, row, col):
        n = len(board)

        # 检查列

        for i in range(row + 1):
            if board[i][col] == 'Q':
                return False

        # 右上
        i = row - 1
        j = col + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1

        i = row - 1
        j = col - 1
        # 左上
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False

            i -= 1
            j -= 1
        return True


# @lc code=end
# [".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
print(Solution().solveNQueens(4))
