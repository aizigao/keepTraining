/**
 * https://github.com/mqyqingfeng/Blog/issues/2
 */

// 构造函数
function Person() {}
Person.prototype.name = "Kevin";

var person1 = new Person();
var person2 = new Person();
person2.name = "Daisy";

console.log(person1.name);
console.log(person2.name); // 'Daisy'

console.log(person1.__proto__ === Person.prototype);

console.log(person1.__proto__.constructor === Person);

console.log(person1.constructor === Person); // 从Person.__proto__.constructor 上获取

// es5 获取对象原型
console.log(Object.getPrototypeOf(person1) === Person.prototype);

// 最原始；
console.log(Object.prototype.__proto__); // null
