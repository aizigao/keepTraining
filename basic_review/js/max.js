//
var a = Math.max(1, 2, 3, 4);

// - 如果有任一参数不能被转换为数值，则结果为 NaN。
// - max 是 Math 的静态方法，所以应该像这样使用：Math.max()，而不是作为 Math 实例的方法 (简单的来说，就是不使用 new )
// - 如果没有参数，则结果为 -Infinity (注意是负无穷大)

console.log(a);

Math.max(true, 0); // 1
Math.max(true, "2", null); // 2
Math.max(1, undefined); // NaN
Math.max(1, {}); // NaN

// 如果没有参数，则结果为 -Infinity，对应的，Math.min 函数，如果没有参数，则结果为 Infinity，所以：
//
var min = Math.min();
var max = Math.max();
console.log(min, max, min > max);

var arr = [6, 5, 2, 3213, 45, 3423];

arr.reduce((prev, next) => Math.max(prev, next));
