// 寄生组合继承:这个过程既实现了继承，又没有去调用Super
function inheritPrototype(Sub, Super) {
  var prototype = Object.create(Super.prototype);
  prototype.constructor = Sub;
  Sub.prototype = prototype;
}
function Super(name) {
  this.name = name;
}
Super.prototype.sayHi = function () {
  console.log(this.name); //ccdida
};

function Sub(name) {
  Super.call(this, name);
}
inheritPrototype(Sub, Super);

Sub.prototype.sayHello = function () {
  console.log("sayHello");
};

var instance1 = new Sub("ccdida");
// instance1.sayHi()
console.log(instance1.__proto__);
console.log(instance1.__proto__.__proto__);
