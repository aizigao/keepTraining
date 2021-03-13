#
# @lc app=leetcode.cn id=12 lang=python3
#
# [12] 整数转罗马数字
#

# @lc code=start


"""
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
"""


digits = [
    # //-=-
    (1000, "M"),
    (900, "CM"),
    (500, "D"),
    (400, "CD"),
    (100, "C"),
    (90, "XC"),
    (50, "L"),
    (40, "XL"),
    (10, "X"),
    (9, "IX"),
    (5, "V"),
    (4, "IV"),
    (1, "I")
]


class Solution:
    # 方法一：贪心不看了 再说
    def intToRoman(self, num: int) -> str:
        ans = []

        # # Loop through each symbol.
        for value, symbol in digits:
            if num == 0:
                break
            count, num = num // value, num % value

            ans.append(
                count * symbol
            )
        return "".join(ans)

    # 二： 硬编码

    def intToRoman_2(self, num: int) -> str:
        thousands = ["", "M", "MM", "MMM"]
        hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
        ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

        return thousands[num // 1000] + hundreds[num % 1000 // 100] + tens[num % 100 // 10] + ones[nums % 10]


# @lc code=end
