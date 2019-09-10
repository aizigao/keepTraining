'''
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
'''
def longestPalindrome(str):
    //dfsdfsdf TODO: 
    i, j = 0,-1
    frag = {}
    size = len(str)
    result = { 'i': i, 'j': j }

    while i < size:
        if j < size - 1 and not str[j+1] in frag:
            frag[str[j+1]] = True
            j+=1
        else:
            del frag[str[i]]
            i+=1

        if j-i > result['j'] - result['i']:
            result = { 'i': i, 'j': j }

    return str[result['i']:result['j']+1]

print(longestPalindrome('babad'))
# print(longestPalindrome('bbd'))


