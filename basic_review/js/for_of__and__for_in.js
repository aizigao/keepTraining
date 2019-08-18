// for in更适合遍历对象，不要使用for in遍历数组。使用for in 也可以遍历数组，但是会存在以下问题：
// index索引为字符串型数字，不能直接进行几何运算
// 使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性
// 遍历顺序有可能不是按照实际数组的内部顺序
(() => {
  Object.prototype.method = function() {
    console.log(this);
  };
  var myObject = { a: 1, b: 2, c: 3 };
  for (var key in myObject) {
    console.log(key);
  }

  console.log("-------");
  // --
  for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(key);
    }
  }
})();

var a = () => {};

(() => {
  Object.prototype.method = function() {
    console.log(this);
  };
  var myObject = { a: 1, b: 2, c: 3 };
  for (var key in myObject) {
    console.log(key);
  }

  console.log("-------");
  // --
  for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(key);
    }
  }
})();

// for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name

// entries
(() => {
  console.log("---------entreis---------");
  const object1 = {
    a: "somestrin",
    b: 43
  };
  for (let [key, value] of Object.entries(object1)) {
    console.log(key + "" + value);
  }
})();

(() => {
  console.log("--------add Symbol.iterator-------------");
  let tempObj = { a: 1, b: 2, c: 3 };

  tempObj[Symbol.iterator] = () => ({
    next: function next() {
      return {
        done: Object.keys(this).length === 0,
        value: Object.keys(this).shift()
      };
    }
  });

  tempObj[Symbol.iterator] = function*() {
    for (let key of Object.keys(this)) {
      yield [key, this[key]];
    }
  };
  for (var key of tempObj) {
    console.log(key);
  }
})();
