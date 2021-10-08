# 灯的初始状态
'''

样例输入

```
0 1 1 0 1 0
1 0 0 1 1 1
0 0 1 0 0 1
1 0 0 1 0 1
0 1 1 1 0 0
```

样例输出

```
1 0 1 0 0 1
1 1 0 1 0 1
0 0 1 0 1 1
1 0 0 1 0 0
0 1 0 0 0 0
'''

oriPuzzle = [
    ## ---
    [0, 1, 1, 0, 1, 0],
    [1, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 0, 0]
]


def guess(press1st, puzzle):
    press = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        press1st,
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    # press
    # 计算第一行结果到到第5行结果
    for r in range(1, 5):
        for c in range(1, 7):
            press[r + 1][c] = (puzzle[r][c] + press[r][c] + press[r - 1][c] +
                               press[r][c - 1] + press[r][c + 1]) % 2

    # # 验证最后一行
    for c in range(1, 7):
        if (press[5][c - 1] + press[5][c] + press[5][c + 1] +
                press[4][c]) % 2 != puzzle[5][c]:
            return False
    print('ok', press)
    return True


def turnOffLights1(puzzle):

    # 处理puzzle
    newPuzzle = [
        [0] * 8,
    ]
    for line in puzzle:
        newPuzzle.append([0] + line + [0])

    # 初始化 press
    press1st = [0] * 8

    success = True
    # 模拟二值进遍历
    c = 0
    while c < 7 and not guess(press1st, newPuzzle):
        press1st[1] += 1
        c = 1
        while press1st[c] > 1:
            press1st[c] = 0
            press1st[c + 1] += 1
            c += 1


turnOffLights1(oriPuzzle)