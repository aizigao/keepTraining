from pythonds.basic import Stack


def baseConverter(decNumber, base):
    s = Stack()
    digits = '0123456789ABCDEF'

    while decNumber > 0:
        rem = decNumber % base
        s.push(rem)
        decNumber = decNumber // base

    resString = ''
    while not s.isEmpty():
        resString += digits[s.pop()]

    return resString


print(baseConverter(25, 2))
print(baseConverter(25, 8))
print(baseConverter(256, 16))
