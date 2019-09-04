/****************
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *****************/


// 执行用时 : 100 ms , 在所有 JavaScript 提交中击败了 86.47% 的用户 
// 内存消耗 : 35.5 MB , 在所有 JavaScript 提交中击败了 86.50% 的用户 

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  let remian = 0

  while (x != 0) {
    remain = x % 10;
    x = Math[x > 0 ? "floor" : "ceil"](x / 10);
    result = result * 10 + remain;
    if(result > Math.pow(2, 31) -1 || result < -Math.pow(2,31)){
      return 0
    }
  }
  return result;
};
console.log(reverse(123))
console.log(reverse(-123));
console.log(reverse(-1234234234234324234233));
