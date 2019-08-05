/**
我们认为：

NaN 和 NaN 是相等
[1] 和 [1] 是相等
{value: 1} 和 {value: 1} 是相等
不仅仅是这些长得一样的，还有

1 和 new Number(1) 是相等
'Curly' 和 new String('Curly') 是相等
true 和 new Boolean(true) 是相等
***/

// eq 第一版
// 用来过滤掉简单的类型比较，复杂的对象使用 deepEq 函数进行处理
function eq(a, b) {
  // === 结果为 true 的区别出 +0 和 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b;

  // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
  if (a == null || b == null) return false;

  // 判断 NaN
  if (a !== a) return b !== b;

  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object")
    return false;

  // 更复杂的对象使用 deepEq 函数进行深度比较
  return deepEq(a, b);
}
/// TODOS: 没有看完
