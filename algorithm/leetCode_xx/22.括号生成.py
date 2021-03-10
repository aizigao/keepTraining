#
# @lc app=leetcode.cn id=22 lang=python3
#
# [22] 括号生成
#

# @lc code=start

# TODO: 有点复杂了，先不看


class Solution:
    # 方法一：暴力法
    # 我们可以生成所有 2^ 2n 个 '(' 和 ')' 字符构成的序列，然后我们检查每一个是否有效即可。
    # O(2^2n * n) / O(n)
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []

        def valid(A):
            bal = 0
            for c in A:
                if c == '(':
                    bal += 1
                else:
                    bal -= 1
                if bal < 0:
                    return False
            return bal == 0

        def generate(A):
            if len(A) == 2 * n:
                if valid(A):
                    ans.append(''.join(A))
                return
            A.append('(')
            generate(A)
            A.pop()
            A.append(')')
            generate(A)
            A.pop()

        generate([])
        return ans
    # 方法二：回溯法

    """
    方法一还有改进的余地：我们可以只在序列仍然保持有效时才添加 '(' or ')'，而不是像 方法一 那样每次添加。我们可以通过跟踪到目前为止放置的左括号和右括号的数目来做到这一点，

    如果左括号数量不大于 nn，我们可以放一个左括号。如果右括号数量小于左括号的数量，我们可以放一个右括号。
    """

    def generateParenthesis2(self, n: int) -> List[str]:
        ans = []

        def backtrack(S, left, right):
            if len(S) == 2 * n:
                ans.append(''.join(S))
                return
            if left < n:
                S.append('(')
                backtrack(S, left+1, right)
                S.pop()
            if right < left:
                S.append(')')
                backtrack(S, left, right+1)
                S.pop()

        backtrack([], 0, 0)
        return ans

    # 方法三：按括号序列的长度递归 TODO:


# @lc code=end
