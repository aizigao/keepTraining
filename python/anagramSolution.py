#! /usr/bin/env python3

'''
olution 1: Checking Off
O(n^2)
'''
# check the lengths of the strings and
# then to see that each character in the first string actually occurs in the second


def anagramSolution1(s1, s2):
    stillOK = True

    if len(s1) != len(s2):
        stillOK = False

    alist = list(s2)

    pos1 = 0

    while pos1 < len(s1) and stillOK:
        pos2 = 0
        found = False

        while pos2 < len(alist) and not found:
            if s1[pos1] == alist[pos2]:
                found = True
            else:
                pos2 = pos2 + 1

        if found:
            alist[pos2] = None
        else:
            stillOK: False
        pos1 = pos1 + 1

    return stillOK


print(
    anagramSolution1('abcd', 'dcba'),
    anagramSolution1('abcd', 'dcbd'),
    anagramSolution1('ddbbcc', 'dbcxxx')
)


'''
Solution 2: Sort and Compare
'''


def anagramSolution2(s1, s2):
    alist1 = list(s1)
    alist2 = list(s2)

    # O(n^2) or O(nlogn)
    alist1.sort()
    alist2.sort()

    pos = 0
    matches = True

    while pos < len(s1) and matches:
        if alist1[pos] == alist2[pos]:
            pos += 1
        else:
            matches = False
    return matches


print(
    anagramSolution2('abcd', 'dcba'),
    anagramSolution2('abcd', 'dcba'),
    anagramSolution2('ddbbcc', 'dbcxxx')
)


'''
Solution 3: Brute Force
A brute force technique for solving a problem typically tries to exhaust all possibilities. For the anagram detection problem, we can simply generate a list of all possible strings using the characters from s1 and then see if s2 occurs. However, there is a difficulty with this approach. When generating all possible strings from s1, there are n possible first characters, 𝑛−1 possible characters for the second position, 𝑛−2 for the third, and so on. The total number of candidate strings is 𝑛∗(𝑛−1)∗(𝑛−2)∗...∗3∗2∗1, which is 𝑛!. Although some of the strings may be duplicates, the program cannot know this ahead of time and so it will still generate 𝑛! different strings.

'''


'''
Solution 4: Count and Compare

T(n) = 2n + 26
-->
O(n)
'''


def anagramSolution4(s1, s2):
    c1 = [0] * 26
    c2 = [0] * 26

    ord_a = ord('a')

    for i in range(len(s1)):
        pos = ord(s1[i]) - ord_a
        c1[pos] = c1[pos] + 1

    for i in range(len(s2)):
        pos = ord(s2[i]) - ord_a
        c2[pos] = c2[pos] + 1

    j, stillOK = 0, True

    while j < 26 and stillOK:
        if c1[j] == c2[j]:
            j += 1
        else:
            stillOK = False

    return stillOK


print(
    anagramSolution4('abcd', 'dcba'),
    anagramSolution4('abcd', 'dcba'),
    anagramSolution4('ddbbcc', 'dbcxxx')
)
