from operator import attrgetter

# https://www.bilibili.com/video/BV1Hx411U7bh?p=5
'''
输入 略

r = 6
c = 7
n = 14

plants = [
 [2,1],
 [6,6],
 [4,2],
 [2,5],
 [2,6],
 # --

 [2,7],
 [3,4],
 [6,1],
 [6,2],
 [2,3],
 # --

 [6,3],
 [6,4],
 [6,5],
 [6,7]
]

输出 
7
'''


# 1. [x,y][] -> {x,y}[]
# 2. sortBy x, y
def formatPlants(oriPlants):
    temp = map(lambda i: {'x': i[0], 'y': i[1]}, oriPlants)

    temp = sorted(temp, key=lambda i: (i['x'], i['y']))
    return temp


def binarySearch(plants, plant):
    n = len(plants)
    left = 0
    right = n - 1

    while left <= right:
        mid = int((right - left) / 2 + left)
        midPlant = plants[mid]
        if midPlant['x'] > plant['x']:
            right = mid - 1
        elif midPlant['x'] < plant['x']:
            left = mid + 1
        else:
            # print(mid, left, right)
            if midPlant['y'] == plant['y']:
                return True
            elif midPlant['y'] < plant['y']:
                left = mid + 1
            else:
                right = mid - 1
    return False


def getMaxStepsFrog(r, c, oriPlants):
    plants = formatPlants(oriPlants)
    max = 2
    n = len(plants)

    def searchPath(target, dX, dY):
        steps = 2
        plant = {"x": target['x'] + dX, "y": target['y'] + dY}
        while plant['x'] <= r and plant['x'] >= 1 and plant[
                'y'] <= c and plant['y'] >= 1:

            # 每一步都必须有才可以
            if not binarySearch(plants, plant):
                steps = 0
                break
            plant['x'] += dX
            plant['y'] += dY
            steps += 1
        return steps

    for i in range(0, n - 1):  # 第一个点
        # 去重性遍历, 注意 i + 1
        for j in range(i + 1, n):  # 第二个点
            # 两个点之间的距离
            dX = plants[j]["x"] - plants[i]["x"]
            dY = plants[j]["y"] - plants[i]["y"]

            # 前一个点
            pX = plants[i]["x"] - dX
            pY = plants[i]["y"] - dY

            # 前一个点 在田里，则第二点 步长不合理, 青娃不能一步跳这么远进入田里，
            # 不用考虑当前这个点不是一个点，因为已经排过序了
            # 跳过这个点，用下一个点测试
            if pX <= r and pX >= 1 and pY <= c and pY >= 1:
                continue

            # x 轴越界， 不用再测了，选用下一点只会更长
            if plants[i]["x"] + (max - 1) * dX > r:
                break

            pY = plants[i]['y'] + (max - 1) * dY
            if pY > c or pY < 1:  # 方向已经过界了，换一点作为第二点再试
                continue

            steps = searchPath(plants[j], dX, dY)
            if steps > max:
                max = steps

    # -------
    if max == 2:
        max = 0
    return max


plants = [
    [2, 1],
    [6, 6],
    [4, 2],
    [2, 5],
    [2, 6],
    # --
    [2, 7],
    [3, 4],
    [6, 1],
    [6, 2],
    [2, 3],
    # --
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 7]
]
rst = getMaxStepsFrog(6, 7, plants)
print(rst)
