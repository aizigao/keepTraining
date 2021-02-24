{
  var obj = { a: 1, b: 2 };
  var descriptor = Object.getOwnPropertyDescriptor(obj, "a");
  console.log(descriptor.enumerable); // true
  console.log(descriptor); // { value: 1, writable: true, enumerable: true, configurable: true }
}

var obj = { a: 1, b: 2 }; //a，b 都是 enumerables 属性

// 将{c：3}设置为'obj'的原型，并且我们知道
// for-in 循环也迭代 obj 继承的属性
// 从它的原型，'c'也可以被访问。
Object.setPrototypeOf(obj, { c: 3 });

// 我们在'obj'中定义了另外一个属性'd'，但是
// 将'enumerable'设置为false。 这意味着'd'将被忽略。
Object.defineProperty(obj, "d", { value: 4, enumerable: false });

for (let prop in obj) {
  console.log(prop);
}
// 打印
// a
// b
// c
