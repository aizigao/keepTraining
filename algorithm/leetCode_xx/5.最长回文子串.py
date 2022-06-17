#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#

# @lc code=start
"""
https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/


对于一个子串而言，如果它是回文串，并且长度大于 22，那么将它首尾的两个字母去除之后，它仍然是个回文串。例如对于字符串 \textrm{``ababa''}“ababa”，如果我们已经知道 \textrm{``bab''}“bab” 是回文串，那么 \textrm{``ababa''}“ababa” 一定是回文串，这是因为它的首尾两个字母都是 \textrm{``a''}“a”。
"""


class Solution:
    # --- 1 动态规划 o
    def longestPalindrome1(self, s: str) -> str:
        n = len(s)

        # n * n dp list
        dp = [([False] * n) for _ in range(n)]

        ans = ""
        # 枚举子串的长度 l+1
        for l in range(n):
            # 枚举子串的起始位置 i，这样可以通过 j=i+l 得到子串的结束位置
            for i in range(n):
                j = i + l
                if j >= n:
                    break

                # -- 初始值
                if l == 0:
                    dp[i][j] = True
                elif l == 1:
                    dp[i][j] = (s[i] == s[j])
                else:
                    dp[i][j] = (dp[i + 1][j - 1] and s[i] == s[j])
                # 当前满足条件并且没有超出
                if dp[i][j] and l + 1 > len(ans):
                    ans = s[i:j + 1]
        return ans

    # -- 2. 中心扩展
    def longestPalindrome(self, s: str) -> str:
        res = ''
        n = len(s)

        def palindrome(s, l, r):
            # 防止越界
            while l >= 0 and r < n  \
                and s[l] == s[r]:
                l -= 1
                r += 1
            return s[l + 1:r]

        for i in range(n):
            # 以s[i] 为中心点
            s1 = palindrome(s, i, i)
            s2 = palindrome(s, i, i + 1)
            res = res if len(res) > len(s1) else s1
            res = res if len(res) > len(s2) else s2
        return res

    # --- 3. Manacher 算法  TODO:


# @lc code=end
