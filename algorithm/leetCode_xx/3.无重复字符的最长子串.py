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
    window.add(s[r])
    r+=1
    while (windowNeedsShrink):
        # 缩小窗口
        window.remove(s[l])
        l+=1
'''

# @lc code=start


class Solution:
    def lengthOfLongestSubstring1(self, s: str) -> int:
        # 哈希集合，记录每个字符是否出现过
        occ = set()
        n = len(s)
        # 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
        rk, ans = -1, 0
        for i in range(n):
            if i != 0:
                # 左指针向右移动一格，移除一个字符
                occ.remove(s[i - 1])
            while rk + 1 < n and s[rk + 1] not in occ:
                # 不断地移动右指针
                occ.add(s[rk + 1])
                rk += 1
            # 第 i 到 rk 个字符是一个极长的无重复字符子串
            ans = max(ans, rk - i + 1)
        return ans

    def lengthOfLongestSubstring(self, s: str) -> int:
        win = dict()
        l = r = 0
        rst = 0

        while r < len(s):
            ch = s[r]
            r += 1
            win[ch] = win[ch] + 1 if ch in win else 1

            while ch in win and win[ch] > 1:
                d = s[l]
                win.remove(d)
                l -= 1
            rst = max(rst, r - l)
        return rst


# @lc code=end
