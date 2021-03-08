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

# @lc code=start


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        r_idx = -1
        rst = 0

        os = set()
        n = len(s)

        for i in range(n):

            # 每次移除时，移除最左侧的元素
            if i is not 0:
                os.remove(s[i-1])

            while r_idx + 1 < n and s[r_idx+1] not in os:
                os.add(s[r_idx+1])
                r_idx += 1
            rst = max(rst, r_idx-i+1)
        return rst


# @lc code=end
