/**************************************
可以用来划分命名空间，减少全局变量的数量。
使用单体模式可以使代码组织的更为一致，使代码容易阅读和维护。
可以被实例化，且实例化一次。
***************************************/

// ---------- 单体模式 ----------
(() => {
  var Singleton = {
    attr1: 1,
    attr2: 2,
    method1: function() {
      return this.attr1;
    },
    method2: function() {
      return this.attr2;
    }
  };
})();
//
//
//
//
var a = () => {};
//
//
//
// ----------- class --------------
(() => {
  class Singleton {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  }
  //
  // var getInstance = (function() {
  //   var instance = null;
  //   return function(name) {
  //     if (!instance) {
  //       instance = new Singleton(name);
  //     }
  //     return instance;
  //   };
  // })();

  var getInstance = (function() {
    var _instance = null;
    return (SuperClass, ...args) => {
      if (!_instance) {
        _instance = new SuperClass(...args);
      }
      return _instance;
    };
  })();
  var a = getInstance(Singleton, "aa");
  var b = getInstance(Singleton, "bb");

  console.log({ a, b });
  console.log(a === b);
})();

var a = () => {};

(() => {
  const singleton = function(fn) {
    var result;
    return function() {
      return result || (result = fn.apply(this, arguments));
    };
  };
  var createMask = singleton(function() {
    return document.body.appendChild(document.createElement("div"));
  });
})();
