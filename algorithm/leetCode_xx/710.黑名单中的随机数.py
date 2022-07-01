#
# @lc app=leetcode.cn id=710 lang=python3
#
# [710] 黑名单中的随机数
#

# @lc code=start
from random import randrange

# 黑名单映射
'''
如果 x 不在黑名单中，则直接返回 x；
如果 x 在黑名单中，则返回 x 映射到 [n-m,n) 范围内的白名单数。
'''


class Solution:
    # [0,N) 看做一个数组，然后将 blacklist 中的元素移到数组的最末尾，
    def __init__(self, n: int, blacklist: List[int]):
        m = len(blacklist)
        self.bound = n - m
        # 白名单数
        w = self.bound

        # [n-m,n) 范围内的黑名单数存入一个哈希集合 black
        black = {b for b in blacklist if b >= self.bound}

        self.b2w = {}

        # 对于每个 [0,n-m) 范围内的黑名单数 b，首先不断增加 w 直至其不在黑名单中，然后将 b 映射到 w 上，并将 w 增加一。

        # 范围在 [0, n)
        for b in blacklist:
            if b < self.bound:
                # 在[n,n-m) 范围内时

                # 不断增加 w 直至其不在黑名单中
                while w in black:
                    w += 1
                self.b2w[b] = w
                w += 1

    def pick(self) -> int:
        x = randrange(self.bound)
        return self.b2w.get(x, x)


# Your Solution object will be instantiated and called as such:
# obj = Solution(n, blacklist)
# param_1 = obj.pick()
# @lc code=end
