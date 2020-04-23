
def toStr(n, base):
    convertString = '123456789ABCDEF'
    if n < base:
        return convertString[n]
    rest = n // base
    cur = n % base
    return toStr(rest, base) + convertString[cur]


print(toStr(1453, 16))
