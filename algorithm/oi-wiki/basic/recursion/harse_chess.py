'''
中国象棋里，给定马初始点，和目标点，算步骤
'''


def guess(housePos, generalPos, maxDepth):
    # board = [[' ' for j in range(0, w)] for i in range(0, h)]
    minStep = float('inf')
    minPath = []
    curPath = []
    walkSet = set()

    # 是否在棋盘上
    def inBoard(pos):
        (x, y) = pos
        return x > -1 and x < w and y > -1 and y < h

    # 方向
    dirs = [
        # --
        (1, 2),
        (2, 1),
        (2, -1),
        (1, -2),
        (-1, -2),
        (-2, -1),
        (-2, 1),
        (-1, 2)
    ]

    def dfs(startPos, endPos, depth):
        nonlocal walkSet
        nonlocal minStep
        nonlocal minPath

        if depth > minStep:
            return

        if depth >= maxDepth:
            print('超过%d步,放弃线路\n' % (maxDepth))
            return

        # 到终点
        if startPos == endPos:
            print('找到可行路径 %s , 需要 %d 步\n' % (curPath, len(curPath)))
            if minStep > len(walkSet):
                minStep = len(walkSet)
                minPath = curPath.copy()
            return

        for dir in dirs:
            nextPos = (startPos[0] + dir[0], startPos[1] + dir[1])

            if not inBoard(nextPos):
                continue

            if (nextPos in walkSet) or nextPos == startPos:
                continue

            walkSet.add(nextPos)
            curPath.append(nextPos)
            depth += 1
            dfs(nextPos, endPos, depth)
            depth -= 1
            curPath.pop()
            walkSet.remove(nextPos)

    dfs(housePos, generalPos, -1)

    print('------------------------------')
    if minStep < float('inf'):
        print('最少要%d步, 路径为 %s' % (minStep, str(minPath)))
    else:
        print('到不了哦')


w = 9
h = 10
guess(housePos=(w - 2, h - 1), generalPos=(4, 0), maxDepth=15)
