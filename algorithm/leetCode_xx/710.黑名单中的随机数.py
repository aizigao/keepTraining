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
        self.sz = n - m
        self.b2w = {}

        # 在 [n-m, n) 的hashMap
        black = {b for b in blacklist if b >= self.sz}
        w = self.sz

        # [0, n) 范围
        for b in blacklist:
            # 如果在 [0,n-m), 将 b 映射到 [n-m, n)中的 在blackList的上值上
            if b < self.sz:
                while w in black:
                    w += 1
                self.b2w[b] = w
                w += 1

    def pick(self) -> int:
        x = randrange(self.sz)
        return self.b2w.get(x, x)


# Your Solution object will be instantiated and called as such:
# obj = Solution(n, blacklist)
# param_1 = obj.pick()
# @lc code=end
