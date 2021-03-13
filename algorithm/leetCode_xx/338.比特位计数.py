#
# @lc app=leetcode.cn id=338 lang=python3
#
# [338] 比特位计数
#

# @lc code=start


class Solution:
    # 一: 直接算
    # O(k×num) / O(1) 其中 kk 是 int 型的二进制位数，k=32
    def countBits_1(self, num: int) -> List[int]:
        def countN(x):
            count = 0
            while x > 0:
                if x & 1:
                    count += 1
                x = x >> 1
            return count

        bits = []
        for x in range(num+1):
            bits.append(
                countN(x)
            )

        return bits

    # 时间复杂度：O(num) / O(1)
    # 方法二：动态规划——最高有效位 TODO: 再说
    # bits[i]=bits[i−highBit]+1
    def countBits(self, num: int) -> List[int]:
        bits = [0]
        highBit = 0
        for i in range(1, num + 1):
            # i & (i-1) 看最后几位的值
            if i & (i - 1) == 0:
                highBit = i
            bits.append(bits[i - highBit] + 1)
        return bits

    # 方法三：动态规划——最低有效位
    def countBits_3(self, num: int) -> List[int]:
        bits = [0]
        for i in range(1, num + 1):
            bits.append(bits[i >> 1] + (i & 1))
        return bits
    # 方法四：动态规划——最低设置位

    def countBits_4(self, num: int) -> List[int]:
        bits = [0]
        for i in range(1, num + 1):
            bits.append(bits[i & (i - 1)] + 1)
        return bits


# @lc code=end
