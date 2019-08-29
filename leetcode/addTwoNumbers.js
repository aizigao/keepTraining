/****************************
题目描述
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
题目解析
设立一个表示进位的变量carried，建立一个新链表，把输入的两个链表从头往后同时处理，每两个相加，将结果加上carried后的值作为一个新节点到新链表后面。
 ****************************/

/// 时间复杂度: O(n)
/// 空间复杂度: O(n)
//
//
//执行用时 : 164 ms , 在所有 JavaScript 提交中击败了 88.41% 的用户
// 内存消耗 : 39.1 MB , 在所有 JavaScript 提交中击败了 18.71% 的用户 ?? 耗了这么多吗

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 输入：(2 -> 9 -> 9) + (5 -> 6 -> 9)
const l1 = { val: 2, next: { val: 9, next: { val: 9, next: null } } };
const l2 = { val: 5, next: { val: 6, next: { val: 9, next: null } } };

///////////----------------------------------------------------/
//

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;

  const dummyHead = new ListNode(-1);
  let cur = dummyHead;
  let carried = 0;

  while (p1 || p2) {
    let a = p1 ? p1.val : 0;
    let b = p2 ? p2.val : 0;
    cur.next = new ListNode((a + b + carried) % 10);
    carried = Math.floor((a + b + carried) / 10);
    cur = cur.next;
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }

  cur.next = carried ? new ListNode(1) : null;

  let ret = dummyHead.next;
  delete dummyHead;

  return ret
};

console.log(addTwoNumbers(l1, l2));
