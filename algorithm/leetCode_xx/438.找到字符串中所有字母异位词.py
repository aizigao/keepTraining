#
# @lc app=leetcode.cn id=438 lang=python3
#
# [438] 找到字符串中所有字母异位词
#

# @lc code=start
import collections


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:

        needs = collections.Counter([i for i in p])
        win = dict()

        l = r = 0
        valid = 0
        rst = []

        while r < len(s):
            ch = s[r]
            r += 1

            if ch in needs:
                win[ch] = win[ch] + 1 if ch in win else 1
                if win[ch] == needs[ch]:
                    valid += 1

            while r - l >= len(p):

                if valid == len(needs):
                    rst.append(l)

                d = s[l]
                l += 1

                if d in needs:
                    if win[d] == needs[d]:
                        valid -= 1
                    win[d] -= 1
        return rst


# @lc code=end
