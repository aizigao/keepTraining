#
# @lc app=leetcode.cn id=76 lang=python3
#
# [76] 最小覆盖子串
#

# @lc code=start

import collections


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ''

        # 「窗口」中的相应字符的出现次
        window = dict()
        #  t 中字符出现次数
        need = collections.Counter([i for i in t])

        # 记录最小覆盖子串的起始索引及长度
        start = 0
        size = float('inf')

        left = right = 0

        # 满足 need 条件的字符个数
        # valid 和 need.size 的大小相同，则说明窗口已满足条件
        valid = 0

        while right < len(s):
            # 开始滑动

            c = s[right]
            # 扩大窗口
            right += 1

            # 更新窗口数据
            if c in need:
                window[c] = window[c] + 1 if c in window else 1

                if window[c] == need[c]:
                    valid += 1

            # 满足后 开始缩小窗口

            while valid == len(need):
                # 更新 结构
                if right - left < size:
                    start = left
                    size = right - left
                # 缩小
                d = s[left]
                left += 1

                # 更新窗口数据
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        return '' if size == float('inf') else s[start:start + size]


# @lc code=end
