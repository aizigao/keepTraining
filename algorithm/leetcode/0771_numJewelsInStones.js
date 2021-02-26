/***********************************************
 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

---
示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3

---
示例 2:

输入: J = "z", S = "ZZ"
输出: 0
注意:

S 和 J 最多含有50个字母。
 J 中的字符不重复。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jewels-and-stones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 ********************/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// mine
{
  // 执行用时 : 96 ms , 在所有 JavaScript 提交中击败了 28.21% 的用户
  // 内存消耗 : 34.1 MB , 在所有 JavaScript 提交中击败了 44.39% 的用户

  var numJewelsInStones = function(J, S) {
    let res = 0;
    const reg = new RegExp("[" + J + "]");
    S.split("").forEach(s => {
      reg.test(s) && res++;
    });
    return res;
  };

  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("z", "ZZ"));
}

// mine2
{
  // 执行用时 : 88 ms , 在所有 JavaScript 提交中击败了 50.49% 的用户
  // 内存消耗 : 34 MB , 在所有 JavaScript 提交中击败了 51.72% 的用户
  var numJewelsInStones = function(J, S) {
    let res = 0;
    const reg = new RegExp("[" + J + "]");
    for (var i = 0, len = S.length; i < len; i++) {
      reg.test(S[i]) && res++;
    }
    return res;
  };

  console.log("----------------------2 -----------------");
  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("z", "ZZ"));
}

{
  // 作者：58fe
  // 链接：https://leetcode-cn.com/problems/jewels-and-stones/solution/jsfang-fa-ba-shi-tou-li-de-bao-shi-replacediao-cha/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  var numJewelsInStones = function(J, S) {
    let newS = S;
    for (let i = 0; i < J.length; i++) {
      newS = newS.replace(new RegExp(J[i], "g"), "");
    }
    return S.length - newS.length;
  };
  console.log("----------------------2 -----------------");
  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("z", "ZZ"));
}

{
  //执行用时 : 64 ms , 在所有 JavaScript 提交中击败了 99.56% 的用户
  // 内存消耗 : 34.3 MB , 在所有 JavaScript 提交中击败了 38.41% 的用户
  var numJewelsInStones = function(J, S) {
    let setJ = new Set(J);
    let res = 0;
    for (i = 0; i < S.length; i++) {
      if (setJ.has(S[i])) {
        res += 1;
      }
    }
    return res;
  };
  console.log("--------------3 hash-------------------");
  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("z", "ZZ"));

  // 作者：zhl1232
  // 链接：https://leetcode-cn.com/problems/jewels-and-stones/solution/js-xie-leetcode-by-zhl1232-6/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}

{
  console.log("-------------mine 3------------------");
  // 执行用时 : 84 ms , 在所有 JavaScript 提交中击败了 65.61% 的用户
  // 内存消耗 : 34.1 MB , 在所有 JavaScript 提交中击败了 42.15% 的用户
  var numJewelsInStones = function(J, S) {
    let freg = {};
    let res = 0;
    for (var j = 0, lenj = J.length; j < lenj; j++) {
      freg[J[j]] = true;
    }
    for (var i = 0, len = S.length; i < len; i++) {
      if (freg[S[i]]) {
        res++;
      }
    }
    return res;
  };
  console.log("--------------3 hash-------------------");
  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("z", "ZZ"));
}
