# O(n^2)
def anagramSolution(s1, s2):
    stillOk = True

    if len(s1) != len(s2):
        stillOk = False

    alist = list(s2)

    # loop
    pos1 = 0

    while pos1 < len(alist) and stillOk:
        pos2 = 0
        found = False

        while pos2 < len(s1) and not found:

            if alist[pos1] == s1[pos2]:
                found = True
            pos2 += 1

        if found:
            alist[pos1] = None
        else:
            stillOk = False
        pos1 += 1
    return stillOk


print(anagramSolution('abcd', 'dcba'))


def anagramSolutionSort(s1, s2):
    if len(s1) != len(s2):
        return False
    alist1 = list(s1)
    alist2 = list(s2)
    # O(nlogn)
    alist1.sort()
    alist2.sort()

    # loop
    pos = 0
    mathes = True
    while pos < len(alist1) and mathes:
        if alist1[pos] == alist2[pos]:
            pos += 1
        else:
            mathes = False
    return mathes


# O(nlogn) or O(n^2)
print(anagramSolutionSort('abcd', 'dcba'))


def anagramSolution3(s1, s2):
    c1 = [0] * 26
    c2 = [0] * 26

    for i in range(len(s1)):
        pos = ord(s1[i]) - ord('a')
        c1[pos] += 1
    for i in range(len(s2)):
        pos = ord(s2[i]) - ord('a')
        c2[pos] += 1

    j = 0
    stillOk = True

    while j < 26 and stillOk:
        if c1[j] == c2[j]:
            j += 1
        else:
            stillOk = False
    return stillOk

print(anagramSolution3('abddd', 'dddba'))
