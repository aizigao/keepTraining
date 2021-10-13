def hanoi(n, src, mid, dist):
    # stack 存储子问题的参数
    stack = []

    stack.append([n, src, mid, dist])

    while stack:
        subHanoi = stack.pop()
        (s_n, s_src, s_mid, s_dist) = subHanoi

        if s_n == 1:
            print('移动 %s --> %s' % (s_src, s_dist))
        else:
            '''
            注意放置 顺序
            '''
            # 第三个子问题
            stack.append((s_n - 1, s_mid, s_src, s_dist))

            # 第二个子问题
            stack.append((1, s_src, s_mid, s_dist))

            # 第一个子问题
            stack.append((s_n - 1, s_src, s_dist, s_mid))


hanoi(3, 'A', 'B', 'C')
