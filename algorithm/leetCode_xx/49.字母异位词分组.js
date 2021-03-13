/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/**"""
 TODO:复杂度 算不来
- 时间复杂度：O(nklogk)，其中 n 是strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度。需要遍历 n 个字符串，对于每个字符串，需要 O(klogk) 的时间进行排序以及 O(1) 的时间更新哈希表，因此总时间复杂度是 OO(nklogk)。

- 空间复杂度：O(nk)，其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度。需要用哈希表存储全部字符串。
"""**/
// 一 排序
var groupAnagrams_1 = function (strs) {
  const map = new Map();

  for (let str of strs) {
    let array = Array.from(str).sort();
    let key = array.toString();
    let list = map.has(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }
  return [...map.values()];
};

// 方法二：计数
/**
 * 时间复杂度：O(n(k+|\Sigma|))O(n(k+∣Σ∣))，其中 nn 是 \textit{strs}strs 中的字符串的数量，kk 是 \textit{strs}strs 中的字符串的的最大长度，\SigmaΣ 是字符集，在本题中字符集为所有小写字母，|\Sigma|=26∣Σ∣=26。需要遍历 nn 个字符串，对于每个字符串，需要 O(k)O(k) 的时间计算每个字母出现的次数，O(|\Sigma|)O(∣Σ∣) 的时间生成哈希表的键，以及 O(1)O(1) 的时间更新哈希表，因此总时间复杂度是 O(n(k+|\Sigma|))O(n(k+∣Σ∣))。

空间复杂度：O(n(k+|\Sigma|))O(n(k+∣Σ∣))，其中 nn 是 \textit{strs}strs 中的字符串的数量，kk 是 \textit{strs}strs 中的字符串的最大长度，\SigmaΣ 是字符集，在本题中字符集为所有小写字母，|\Sigma|=26∣Σ∣=26。需要用哈希表存储全部字符串，而记录每个字符串中每个字母出现次数的数组需要的空间为 O(|\Sigma|)O(∣Σ∣)，在渐进意义下小于 O(n(k+|\Sigma|))O(n(k+∣Σ∣))，可以忽略不计。

 */

var groupAnagrams = function (strs) {
  const map = {};
  const letterACharCodeAt = "a".charCodeAt();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - letterACharCodeAt]++;
    }
    map[count] ? map[count].push(s) : (map[count] = [s]);
  }
  return Object.values(map);
};

// @lc code=end
