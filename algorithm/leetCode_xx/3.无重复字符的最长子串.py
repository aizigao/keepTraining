#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#
'''
时间复杂度：O(N)，其中 NN 是字符串的长度。左指针和右指针分别会遍历整个字符串一次。

空间复杂度：O(|\Sigma|)O(∣Σ∣)，其中 \SigmaΣ 表示字符集（即字符串中可以出现的字符），|\Sigma|∣Σ∣ 表示字符集的大小。在本题中没有明确说明字符集，因此可以默认为所有 ASCII 码在 [0, 128)[0,128) 内的字符，即 |\Sigma| = 128∣Σ∣=128。我们需要用到哈希集合来存储出现过的字符，而字符最多有 |\Sigma|∣Σ∣ 个，因此空间复杂度为 O(|\Sigma|)O(∣Σ∣)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
'''
'''
l, r = 0

while r < len(s):
    # 增大窗口
    window.append(s[r])
    r+=1
    while (windowNeedsShrink):
        # 缩小窗口
        window.pop(0)
        l+=1
'''

# @lc code=start


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        win = dict()
        rst = 0
        l, r = 0, 0

        while r < len(s):
            char = s[r]
            r += 1
            # 更新数据
            win[char] = 1 if char not in win else win[char] + 1

            # 收缩
            while char in win and win[char] > 1:
                d = s[l]
                l += 1
                win[d] -= 1
            rst = max(rst, r - l)

        return rst

        # occ = set()
        # n = len(s)
        # rk = -1
        # ans = 0

        # for i in range(n):
        #     if i != 0:
        #         occ.remove(s[i - 1])
        #     while rk + 1 < n and s[rk + 1] not in occ:
        #         occ.add(s[rk + 1])
        #         rk += 1
        #     ans = max(ans, rk - i + 1)
        # return ans


# @lc code=end
