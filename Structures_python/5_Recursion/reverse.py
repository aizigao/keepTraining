# import unittest
# from test import testEqual


def reverse(s):
    if len(s) <= 1:
        return s
    lastC = s[-1]
    return lastC + reverse(s[:-1])

print(reverse('hello'))
# testEqual(reverse("hello"), "olleh")
# testEqual(reverse("l"), "l")
# testEqual(reverse("follow"), "wollof")
# testEqual(reverse(""), "")
