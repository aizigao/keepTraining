#
# @lc app=leetcode.cn id=567 lang=python3
#
# [567] 字符串的排列
#

# @lc code=start
import collections


class Solution:
    def checkInclusion(self, t: str, s: str) -> bool:
        if len(t) > len(s):
            return False

        needs = collections.Counter([i for i in t])
        win = dict()

        l = r = 0
        valid = 0

        while r < len(s):
            ch = s[r]
            r += 1

            if ch in needs:
                win[ch] = win[ch] + 1 if ch in win else 1
                if win[ch] == needs[ch]:
                    valid += 1

            while r - l >= len(t):
                d = s[l]
                l += 1

                if valid == len(needs):
                    return True

                if d in needs:
                    if win[d] == needs[d]:
                        valid -= 1
                    win[d] -= 1
        return False


# @lc code=end
