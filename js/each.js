// //
// TODOS: 没有看完

//https://github.com/mqyqingfeng/Blog/issues/40
// 第一版

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

function each(obj, callback) {
  var length,
    i = 0;

  if (isArrayLike(obj)) {
    length = obj.length;

    for (; i < length; i++) {
      callback(i, obj[i]);
    }
  } else {
    for (i in obj) {
      callback(i, obj[i]);
    }
  }
  return obj;
}
