#
# @lc app=leetcode.cn id=647 lang=python3
#
# [647] 回文子串
#

# @lc code=start


class Solution:
    # 方法一：中心拓展
    # 间复杂度：O(n^2) /空间复杂度：O(1)
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        ans = 0

        # 0 -- (2n -1) 之前, 合并奇偶
        for i in range(2*n-1):
            l = i // 2
            r = l + i % 2

            while l >= 0 and r < n and s[l] == s[r]:
                l -= 1
                r += 1
                ans += 1
        return ans

    # 方法二: 方法二：Manacher 算法
    # Manacher 算法是在线性时间内求解最长回文子串的算法 不看
    # O(n) / O(n)


# @lc code=end
