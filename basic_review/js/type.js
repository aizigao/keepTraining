console.log(typeof "aizigao");
// undefined、object、boolean、number、string、object, symbol
// typeof null // 'object'
const a = Symbol("dfsdf");
const b = Symbol.for("aaa");

console.log(typeof a, a);
console.log(typeof b, b);

// ---- 其它---
// Array Function Date RegExp Error

console.log(
  Object.prototype.toString.call([]),
  Object.prototype.toString.call(() => {}),
  Object.prototype.toString.call(new Date()),
  Object.prototype.toString.call(/a/),
  Object.prototype.toString.call(Math),
  Object.prototype.toString.call(JSON)
);

// --
//
//
//

var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error"
  .split(" ")
  .map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });

function type(obj) {
  // 一箭双雕
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function"
    ? class2type[Object.prototype.toString.call(obj)] || "object"
    : typeof obj;
}

// -- isplainObjetc

// 上节中写 type 函数时，用来存放 toString 映射结果的对象
var class2type = {};

// 相当于 Object.prototype.toString
var toString = class2type.toString;

// 相当于 Object.prototype.hasOwnProperty
var hasOwn = class2type.hasOwnProperty;

function isPlainObject(obj) {
  var proto, Ctor;

  // 排除掉明显不是obj的以及一些宿主对象如Window
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }

  /**
   * getPrototypeOf es5 方法，获取 obj 的原型
   * 以 new Object 创建的对象为例的话
   * obj.__proto__ === Object.prototype
   */
  proto = Object.getPrototypeOf(obj);

  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if (!proto) {
    return true;
  }

  /**
   * 以下判断通过 new Object 方式创建的对象
   * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
   * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
   */
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

  // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return (
    typeof Ctor === "function" &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  );
}

// -- isEmptyObject

function isEmptyObject(obj) {
  var name;

  for (name in obj) {
    return false;
  }

  return true;
}

console.log(isEmptyObject({})); // true
console.log(isEmptyObject([])); // true
console.log(isEmptyObject(null)); // true
console.log(isEmptyObject(undefined)); // true
console.log(isEmptyObject(1)); // true
console.log(isEmptyObject("")); // true
console.log(isEmptyObject(true)); // true

function isWindow(obj) {
  return obj != null && obj === obj.window;
}

function isArrayLike(obj) {
  // obj 必须有 length属性
  var length = !!obj && "length" in obj && obj.length;
  var typeRes = type(obj);

  // 排除掉函数和 Window 对象
  if (typeRes === "function" || isWindow(obj)) {
    return false;
  }

  return (
    typeRes === "array" ||
    length === 0 ||
    (typeof length === "number" && length > 0 && length - 1 in obj)
  );
}

var isElement = function(obj) {
  return !!(obj && obj.nodeType === 1);
};
