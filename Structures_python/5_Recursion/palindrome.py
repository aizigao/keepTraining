# from test import testEqual


def removeWhite(s):
    if len(s) < 1:
        return ''
    whiteList = [' ','\'']

    c = s[0]
    if c in whiteList:
        c = ''
    return c + removeWhite(s[1::])


def isPal(s):
    if len(s) <= 1:
        return True
    first = s[0]
    last = s[-1]
    if first != last:
        return False
    else:
        return isPal(s[1:-1])


print(removeWhite('rad ar'))
print(isPal(removeWhite('rad ar')))
print(isPal(removeWhite('madam i\'m adam')))

# testEqual(isPal(removeWhite("x")), True)
# testEqual(isPal(removeWhite("radar")), True)
# testEqual(isPal(removeWhite("hello")), False)
# testEqual(isPal(removeWhite("")), True)
# testEqual(isPal(removeWhite("hannah")), True)
# testEqual(isPal(removeWhite("madam i'm adam")), True)
