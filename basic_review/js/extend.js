// jquery
// jquery.extend(target[, object1][, object N])
//
//

//
//
/**
var obj1 = {
    a: 1,
    b: { b1: 1, b2: 2 }
};

var obj2 = {
    b: { b1: 3, b3: 4 },
    c: 3
};

var obj3 = {
    d: 4
}

console.log($.extend(obj1, obj2, obj3));

// {
//    a: 1,
//    b: { b1: 3, b3: 4 },
//    c: 3,
//    d: 4
// }
**/

// 第一版
function extend() {
  var name, options, copy;
  var length = arguments.length;
  var i = 1;
  var target = arguments[0];

  for (; i < length; i++) {
    options = arguments[i];
    if (options != null) {
      for (name in options) {
        copy = options[name];
        if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}
