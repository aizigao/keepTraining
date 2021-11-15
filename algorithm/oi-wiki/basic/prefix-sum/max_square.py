data = [
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
]

prefix = [[0 for j in range(0, 8)] for i in range(0, 6)]

for i in range(0, 6):
    for j in range(0, 8):
        if i == 0 or j == 0:
            prefix[i][j] = data[i][j]
        else:
            prefix[i][j] = prefix[i-1][j] \
                        +  prefix[i][j-1] \
                        - prefix[i-1][j-1] \
                        + data[i][j]

ans = 1
l = 2
n = 6
m = 8

while l < min(n, m):
    for i in range(l, n):
        for j in range(l, m):
            rangeV = prefix[i][j] \
                    - prefix[i-l][j] \
                    - prefix[i][j-l] \
                    + prefix[i-l][j-l]
            isSquare = rangeV - l * l
            if isSquare:
                ans = max(ans, l)
    l += 1

print(ans)
