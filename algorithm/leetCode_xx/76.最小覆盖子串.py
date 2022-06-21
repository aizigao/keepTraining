#
# @lc app=leetcode.cn id=76 lang=python3
#
# [76] 最小覆盖子串
#

# @lc code=start

import collections


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        # hash
        cnt = collections.Counter(t)
        #  need = 0 为匹配到
        need = len(t)

        n = len(s)
        start, end = 0, -1

        # 初始化为一个不可能的较大值
        min_len = n + 1

        left, right = 0, 0

        for right in range(n):
            ch = s[right]

            if ch in cnt:
                if cnt[ch] > 0:
                    need -= 1
                cnt[ch] -= 1
            while need == 0:
                if right - left + 1 < min_len:
                    min_len = right - left + 1
                    start, end = left, right


# @lc code=end
