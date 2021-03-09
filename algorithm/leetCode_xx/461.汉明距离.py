#
# @lc app=leetcode.cn id=461 lang=python3
#
# [461] 汉明距离
#

# @lc code=start

"""
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
    ==> 2
"""


class Solution:
    # 方法二：移位 O(1) / O(1)
    def hammingDistance(self, x: int, y: int) -> int:
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        xor = x ^ y
        distance = 0

        while xor:
            if xor & 1:
                distance += 1
            xor = xor >> 1
        return distance


# @lc code=end
