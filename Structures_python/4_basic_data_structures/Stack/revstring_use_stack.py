from pythonds.basic import Stack


def revstring(orgStr):
    tempStack = Stack()
    resultStr = ''
    # push item to stack
    for s in orgStr:
        tempStack.push(s)

    while not tempStack.isEmpty():
        resultStr += tempStack.pop()
    return resultStr


print(revstring('abcdef'))
