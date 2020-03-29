from pythonds.basic import Stack


def devicdeBy2(decNumber):
    remstack = Stack()

    while decNumber > 0:
        rem = decNumber % 2
        decNumber = decNumber // 2
        remstack.push(rem)

    binString = ''

    while not remstack.isEmpty():
        binString += str(remstack.pop())

    return binString


def devicdeBy2_xx(decNumber):
    # remstack = Stack()
    binString = ''

    while decNumber > 0:
        rem = decNumber % 2
        decNumber = decNumber // 2
        binString = str(rem) + binString

    return binString


print(
    devicdeBy2(8)
)

print(
    devicdeBy2_xx(8)
)
