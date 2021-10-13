def hanoi(n, src, mid, dest):
    # stack 存储子问题的参数
    stack = []

    stack.append([n, src, mid, dest])

    while stack:
        subHanoi = stack.pop()
        (s_n, s_src, s_mid, s_dest) = subHanoi

        if s_n == 1:
            print('移动 %s --> %s' % (s_src, s_dest))
        else:
            '''
            注意放置 顺序, 最后的运算最放在 栈底的， 所以要先放入
            '''
            # 第三个子问题
            stack.append((s_n - 1, s_mid, s_src, s_dest))

            # 第二个子问题
            stack.append((1, s_src, s_mid, s_dest))

            # 第一个子问题
            stack.append((s_n - 1, s_src, s_dest, s_mid))


hanoi(3, 'A', 'B', 'C')
