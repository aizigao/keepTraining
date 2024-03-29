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
        w = self.bound
        self.b2w = {}

        #在 [n-m, n) 内的 black map
        black = {b for b in blacklist if b >= self.bound}

        # [0,n) 中 blacklist

        for b in blacklist:
            # 若是 [0,n -m)中时，将b 映射到 [n-m,n)上
            if b < self.bound:
                # 找到 [n-m, n)中不在 black里的值
                while w in black:
                    w += 1
                # 完成映射
                self.b2w[b] = w
                w += 1

    def pick(self) -> int:
        x = randrange(0, self.bound)
        return self.b2w.get(x, x)


# Your Solution object will be instantiated and called as such:
# obj = Solution(n, blacklist)
# param_1 = obj.pick()
# @lc code=end
