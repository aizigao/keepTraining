#
# @lc app=leetcode.cn id=79 lang=python3
#
# [79] 单词搜索
#

# @lc code=start


class Solution:
    # 方法一：深度优先搜索
    """
    时间复杂度：一个非常宽松的上界为 O(M*N * 3^L) TODO: 这玩意咋算的，不管了
    空间: O(MN)
    """

    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board)
        if rows == 0:
            return False
        columns = len(board[0])

        visited = set()

        def check(i, j, k):
            if board[i][j] != word[k]:
                return False

            if k == len(word) - 1:
                return True

            siblings = [
                (i-1, j),
                (i+1, j),
                (i, j-1),
                (i, j+1),
            ]

            result = False
            visited.add((i, j))
            for ii, jj in siblings:
                inRange = 0 <= ii < rows and 0 <= jj < columns
                notVisited = (ii, jj) not in visited
                if inRange and notVisited and check(ii, jj, k+1):
                    result = True
                    break
            visited.remove((i, j))

            return result

        # loop item
        for i in range(rows):
            for j in range(columns):
                if check(i, j, 0):
                    return True

        return False

    # 方法二 回溯

# @lc code=end
