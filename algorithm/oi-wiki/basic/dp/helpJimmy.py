'''
if ( 板子k左端正下方没有别的板子) {
    if( 板子k的高度 h(k) 大于Max)
        LeftMinTime(k) = ∞;
    else
        LeftMinTime(k) = h(k);
}
else if( 板子k左端正下方的板子编号是m )
    LeftMinTime(k) = h(k)-h(m) +
        Min( LeftMinTime(m) + Lx(k)-Lx(m),
            RightMinTime(m) + Rx(m)-Lx(k));
}


时间复杂度： 一共 n个板子，每个左右两端的最小时间各算一次 O(n) 找出板子一段到地面之间有那块板子，需要遍历板子 O(n) 总的时间复杂度O(n2)
'''

max_n = 1000
inf = float('inf')

# 初始位置
X = 8
Y = 17
maxHeight = 20

data = [
    # x1 x1 h
    [0, 10, 8],
    [0, 10, 13],
    [4, 14, 3]
]
'''
-- output -----> 23
'''

# 初始化数据
leftMinTimeOfK = [-1 for i in range(0, max_n + 10)]
# rightMinTime = [-1 for i in range(0, max_n + 10)]
rightMinTimeOfK = [-1 for i in range(0, max_n + 10)]
n = len(data)
platForms = [{"Lx": X, "Rx": X, "h": Y}]
for (idx, item) in enumerate(data):
    platForms.append({"Lx": item[0], "Rx": item[1], "h": item[2]})
platForms = sorted(platForms, key=lambda i: i['h'], reverse=True)


def minTime(k, bLeft):
    # 初始化x和y坐标，如果是去左边，就走到左边边上，如果去右边，就走到右边边上
    y = platForms[k]['h']
    x = platForms[k]['Lx'] if bLeft else platForms[k]['Rx']

    # 找到现在这块板下面的那块板
    i = k + 1
    # n 块板 + 初始点 -> n+1
    while i < n + 1:
        # 在板子上
        if platForms[i]['Lx'] <= x and platForms[i]['Rx'] >= x:
            break
        i += 1

    # 板子k左端正下方有别的板
    if i <= n:
        if y - platForms[i]['h'] > maxHeight:
            return inf
    # 板子k左端正下方没有别的板
    else:
        if y > maxHeight:
            return inf
        else:
            return y

    nLeftTime = y - platForms[i]['h'] + x - platForms[i]['Lx']
    nRightTime = y - platForms[i]['h'] + platForms[i]['Rx'] - x

    if leftMinTimeOfK[i] == -1:
        leftMinTimeOfK[i] = minTime(i, True)

    if rightMinTimeOfK[i] == -1:
        rightMinTimeOfK[i] = minTime(i, False)

    nLeftTime += leftMinTimeOfK[i]
    nRightTime += rightMinTimeOfK[i]

    if nLeftTime < nRightTime:
        return nLeftTime
    return nRightTime


rst = minTime(0, True)

print('rst', rst)
