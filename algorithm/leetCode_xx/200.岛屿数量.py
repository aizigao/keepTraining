#
# @lc app=leetcode.cn id=200 lang=python3
#
# [200] 岛屿数量
#

# @lc code=start


def dfs(grid, r, c):
    nr = len(grid)
    nc = len(grid[0])
    grid[r][c] = '0'

    siblings = [
        (r-1, c),
        (r+1, c),
        (r, c-1),
        (r, c+1)
    ]

    for x, y in siblings:
        if 0 <= x < nr and 0 <= y < nc and grid[x][y] == '1':
            dfs(grid, x, y)


class Solution:
    # 一 dfs
    # O(m*n) / O(m*n)
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        if rows == 0:
            return 0

        columns = len(grid[0])

        count = 0

        for r in range(rows):
            for c in range(columns):
                if grid[r][c] == '1':
                    count += 1
                    dfs(grid, r, c)
        return count

    # 二 bfs
    # O(m*n) / O(m*n)

    # 方法三：并查集 TODO:
# @lc code=end
