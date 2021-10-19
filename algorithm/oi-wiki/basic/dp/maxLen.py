test1 = ['abcfbc', 'abfcab']  #4
test2 = ['programming', 'contest']  # 2
test3 = ['abcd', 'mnp']  # 0


def maxLen(s1, s2):
    len_s1 = len(s1)
    len_s2 = len(s2)

    if not len_s1 or not len_s2:
        return 0

    dp = [[0 for j in range(len_s2 + 1)] for i in range(len_s1 + 1)]

    for i in range(1, len_s1 + 1):
        for j in range(1, len_s2 + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    print(dp[len_s1][len_s2])


maxLen(test1[0], test1[1])
maxLen(test2[0], test2[1])
maxLen(test3[0], test3[1])
