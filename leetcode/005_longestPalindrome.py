'''
tags: string, 动态规划
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode/
'''



'''
方法一：最长公共子串
常见错误

有些人会忍不住提出一个快速的解决方案，不幸的是，这个解决方案有缺陷(但是可以很容易地纠正)：

反转 S，使之变成 S'
′
 。找到 S 和 S'
′
  之间最长的公共子串，这也必然是最长的回文子串。

这似乎是可行的，让我们看看下面的一些例子。

例如，S = caba  S' = abac
′
 =“abac”：

SS 以及 S'S 
′
  之间的最长公共子串为 \textrm{“aba”}“aba”，恰恰是答案。

让我们尝试一下这个例子：S = \textrm{“abacdfgdcaba”}S=“abacdfgdcaba”, S' = \textrm{“abacdgfdcaba”}S 
′
 =“abacdgfdcaba”：

SS 以及 S'S 
′
  之间的最长公共子串为 \textrm{“abacd”}“abacd”。显然，这不是回文。

算法

我们可以看到，当 SS 的其他部分中存在非回文子串的反向副本时，最长公共子串法就会失败。为了纠正这一点，每当我们找到最长的公共子串的候选项时，都需要检查子串的索引是否与反向子串的原始索引相同。如果相同，那么我们尝试更新目前为止找到的最长回文子串；如果不是，我们就跳过这个候选项并继续寻找下一个候选。

这给我们提供了一个复杂度为 O(n^2)O(n 
2
 ) 动态规划解法，它将占用 O(n^2)O(n 
2
 ) 的空间（可以改进为使用 O(n)O(n) 的空间）。请在 这里 阅读更多关于最长公共子串的内容。

作者：LeetCode
链接：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
'''

# 时间复杂度：两层循环 O(n²)O(n²)。
# 空间复杂度：一个二维数组 O(n²)O(n²)。
def longestPalindrome(s):

    if s == "":
        return ""

    reverse = s[::-1] #字符串倒置
    origin = s

    length = len(s)

    arr = [[0 for y in range(length)] for x in range(length)]
    maxLen = 0
    maxEnd = 0
    for i in range(length):
        for j in range(length):
            if origin[i] == reverse[j]:
                if i == 0 or j == 0:
                    arr[i][j] = 1
                else:
                    arr[i][j] = arr[i - 1][j - 1] + 1
            if arr[i][j] > maxLen:

                beforeRev = length - 1 - j
                # 判断下标是否对应
                if beforeRev + arr[i][j] - 1 == i:
                    maxLen = arr[i][j];
                    maxEnd = i;
                    maxEnd = i; #以 i 位置结尾的字符

    return s[maxEnd - maxLen + 1:maxEnd + 1]

print(longestPalindrome('caba'))
print(longestPalindrome('abc435cba'))




'''
解法 4: 扩展中心
我们知道回文串一定是对称的，所以我们可以每次循环选择一个中心，进行左右扩展，判断左右字符是否相等即可。

时间复杂度：O(n²)
空间复杂度：O(1)
'''


def longestPalindrome2(s):
    if s == '':
        return ''

    start= 0
    end = 0

    length = len(s)
    for i in range(length):

        len1 = expandAroundCenter(s, i, i)
        len2 = expandAroundCenter(s, i, i + 1);
        length = max(len1, len2)

        if length > end - start:
            start = i - (length - 1) // 2
            end = i + length // 2
    return s[start:end + 1]

def expandAroundCenter(s, left, right):
    L = left
    R = right

    while L >= 0 and R < len(s) and s[L] == s[R]:
        L-=1
        R+=1
    return R - L - 1

print(longestPalindrome2('caba'))
print(longestPalindrome2('abc435cba'))

