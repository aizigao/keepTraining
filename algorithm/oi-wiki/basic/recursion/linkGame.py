'''
测试样例
W: 5 H:4
[
 ['x','x','x','x','x']
 ['x',' ',' ',' ','x']
 ['x','x','x',' ','x']
 [' ','x','x','x',' ']
]


2,3 5,3 --> 4 segments
1,3 4,4 --> 3 segments
2,3 3,4 --> impossible
0,0 0,0
0,0

'''

board = [
    # -- 外围加一圈，处理相同问题
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'x', 'x', 'x', 'x', 'x', ' '],
    [' ', 'x', ' ', ' ', ' ', 'x', ' '],
    [' ', 'x', 'x', 'x', ' ', 'x', ' '],
    [' ', ' ', 'x', 'x', 'x', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

# ===========
w = 5
h = 4

# 方向
to = [
    # --
    [0, -1],  # up
    [0, 1],  # down
    [-1, 0],  # left
    [1, 0],  # right
]


# 是否还在board上
def inBoard(x, y):
    return x > -1 and x < w + 2 and y > -1 and y < h + 2


# 是否可以走
def notWalked(mark, x, y):
    return board[y][x] == ' ' and not mark[y][x]


def isEnd(x, y, end_x, end_y):
    return x == end_x and y == end_y and board[y][x] == 'x'


def linkGame(now, end):
    # 标记是否走过
    mark = [[False for j in range(w + 2)] for i in range(h + 2)]
    minStep = float('inf')
    count = 0
    end_x = end[0]
    end_y = end[1]
    now_x = now[0]
    now_y = now[1]
    target_path = []
    cur_path = []

    def search(now_x, now_y, end_x, end_y, step, f):
        nonlocal minStep
        nonlocal count
        nonlocal cur_path
        nonlocal target_path

        # 返回，优化策略, 当前大于小最值
        if step > minStep:
            return

        # 到达终点
        if now_x == end_x and now_y == end_y:
            if step < minStep:
                print('cp', step, cur_path)
                target_path = cur_path.copy()
                minStep = step
            return
        for ff in to:
            x = now_x + ff[0]
            y = now_y + ff[1]

            if inBoard(x, y) and (notWalked(mark, x, y)
                                  or isEnd(x, y, end_x, end_y)):
                mark[y][x] = True
                nstep = step if f == ff else step + 1
                cur_path.append([x, y])
                search(x, y, end_x, end_y, nstep, ff)
                cur_path.pop()
                mark[y][x] = False  # 回溯, 该位置未走过

    search(now_x, now_y, end_x, end_y, 0, -1)

    if minStep < float('inf'):
        print('拐了%d的弯，走了%d步, 到了 %s' % (minStep, len(target_path), str(end)))
        print('行走路径%s' % (str(target_path)))
    else:
        print('不能到达 %s\n' % str(end))


test1 = [[2, 3], [5, 3]]
test2 = [[1, 3], [4, 4]]
test3 = [[2, 3], [3, 4]]
linkGame(test1[0], test1[1])
linkGame(test2[0], test2[1])
linkGame(test3[0], test3[1])