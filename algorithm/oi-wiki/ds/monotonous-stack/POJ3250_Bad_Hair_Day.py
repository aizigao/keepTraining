input = [6, 10, 3, 7, 4, 12, 2]

expectOutput = 5


def solution(list):
    ans = 0
    stack = []

    for i, h in enumerate(list):
        if stack and h > stack[-1]:
            curW = i - stack[-1]
            ans += curW

        while stack and h > list[stack[-1]]:
            stack.pop()
        stack.append(i)
    return ans


print(solution(input))