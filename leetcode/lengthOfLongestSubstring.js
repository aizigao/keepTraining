/*******************************************************
题目描述
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
题目解析
建立一个256位大小的整型数组 freg ，用来建立字符和其出现位置之间的映射。

维护一个滑动窗口，窗口内的都是没有重复的字符，去尽可能的扩大窗口的大小，窗口不停的向右滑动。

（1）如果当前遍历到的字符从未出现过，那么直接扩大右边界；
（2）如果当前遍历到的字符出现过，则缩小窗口（左边索引向右移动），然后继续观察当前遍历到的字符；
（3）重复（1）（2），直到左边索引无法再移动；
（4）维护一个结果res，每次用出现过的窗口大小来更新结果 res，最后返回 res 获取结果。
 *****************************/



// 滑动窗口
// 时间复杂度: O(len(s))
// 空间复杂度: O(len(charset))
//
// 执行用时 : 128 ms , 在所有 JavaScript 提交中击败了 66.31% 的用户
// 内存消耗 : 40.1 MB , 在所有 JavaScript 提交中击败了 53.46% 的用户

const lengthOfLongestSubstring = (s) =>{
  const freg = {}
  let l = 0;
  let r = -1;
  let res = 0;
  const sLen = s.length;

  while(l < sLen){
    if( r + 1 < sLen && !freg[s[r+1]] ){
      r++
      freg[s[r]] = true
    }else{
      // r 已经到头
      freg[s[l]] = false
      l++
    }
    res = Math.max(res, r-l+1)
  }
  return res
}



console.log(lengthOfLongestSubstring("abcabcbb"))
