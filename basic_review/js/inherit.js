/**
 * es5 寄生组合式继承
 */

/**
 * es5 继承方式
 * 原型链
 * 借用构造函数
 * 组合式继承
 * 寄生式继承
 * 寄生组合式继承
 */
(function() {
  /*------------*/
  // -- 父类

  function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  SuperType.prototype.sayName = function() {
    console.log(this.name);
  };

  // -- 子类
  function SubType(name, age) {
    SuperType.call(this, name); // 借用构造函数, 继承属性
    this.age = age;
  }
  SubType.prototype.sayAge = function() {
    console.log(this.age);
  };

  // 父类原型副本赋值到子类原型
  inheritPrototype(SubType, SuperType);

  function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype); // 父类原型副本
    // constructor 与 propotype的指向化
    prototype.constructor = subType;
    subType.prototype = prototype;
  }

  /*----------*/
})();

