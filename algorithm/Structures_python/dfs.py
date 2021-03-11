def dfs(node):
    if node is None:
        return
    nodeSet = set()
    stack = []
    print(node.value)
    nodeSet.add(node)
    stack.append(node)
    while len(stack) > 0:
        cur = stack.pop()
        for next in cur.nexts:
            if next not in nodeSet:
                stack.append(cur)
                stack.append(next)
                set.add(next)
                print(next.value)
                break
