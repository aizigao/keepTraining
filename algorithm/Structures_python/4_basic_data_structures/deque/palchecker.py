from pythonds.basic import Deque


def palchecker(aString):
    chardeque = Deque()

    for ch in aString:
        chardeque.addRear(ch)

    stillEqual = True
    # 两端都减，这里不用isEmpty了
    while chardeque.size() > 1 and stillEqual:
        first = chardeque.removeFront()
        last = chardeque.removeRear()
        if first != last:
            stillEqual = False
    return stillEqual


print(
    palchecker('lslslsl')
)

print(
    palchecker('abcxxcba')
)

print(
    palchecker('3')
)