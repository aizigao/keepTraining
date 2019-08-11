// In mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument.
// https://github.com/mqyqingfeng/Blog/issues/42
// person例子没有看懂
(() => {
  var curry = function() {
    var fn = [].shift.call(arguments);
    var args = [].slice.call(arguments);
    return function() {
      var newArgs = args.concat([].slice.call(arguments));
      return fn.apply(this, newArgs);
    };
  };

  function add(a, b) {
    return a + b;
  }

  var addCurry = curry(add, 1, 2);
  console.log(addCurry());
  var addCurry = curry(add, 1);
  console.log(addCurry(2)); //3
  var addCurry = curry(add);
  console.log(addCurry(1, 2)); //3
})();

// 已经有柯里化的感觉了，但是还没有达到要求，不过我们可以把这个函数用作辅助函数，帮助我们写真正的 curry 函数。

(() => {
  function subCurry(fn, ...beforeArgs) {
    return function(...afterArgs) {
      return fn.apply(this, [...beforeArgs, ...afterArgs]);
    };
  }
  function curry(fn, restArgsLen) {
    restArgsLen = restArgsLen || fn.length;

    return function(...args) {
      if (args.length < restArgsLen) {
        const sub = subCurry.apply(this, [fn, ...args]);
        return curry(sub, restArgsLen - args.length);
      } else {
        return fn.apply(this, args);
      }
    };
  }

  var fnOrign = function(a, b, c) {
    return [a, b, c];
  };
  var fn = curry(fnOrign);

  // var v1 = fn("a", "b", "c"); // ["a", "b", "c"]
  var v2 = fn("a", "b")("c"); // ["a", "b", "c"]
  console.log(v2);
  var v3 = fn("a")("b")("c"); // ["a", "b", "c"]
  console.log(v3);
  // var v4 = fn("a")("b", "c"); // ["a", "b", "c"]
  // console.log(v1, v2, v3, v4);
})();

(() => {
  var curry = fn =>
    (judge = (...args) =>
      args.length === fn.length
        ? //--
          fn(...args)
        : arg => judge(...args, arg));
})();

(() => {
  // 第三版
  function curry(fn, args, holes) {
    length = fn.length;

    args = args || [];

    holes = holes || [];

    return function() {
      var _args = args.slice(0),
        _holes = holes.slice(0),
        argsLen = args.length,
        holesLen = holes.length,
        arg,
        i,
        index = 0;

      for (i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
        if (arg === _ && holesLen) {
          index++;
          if (index > holesLen) {
            _args.push(arg);
            _holes.push(argsLen - 1 + index - holesLen);
          }
        }
        // 处理类似 fn(1)(_) 这种情况
        else if (arg === _) {
          _args.push(arg);
          _holes.push(argsLen + i);
        }
        // 处理类似 fn(_, 2)(1) 这种情况
        else if (holesLen) {
          // fn(_, 2)(_, 3)
          if (index >= holesLen) {
            _args.push(arg);
          }
          // fn(_, 2)(1) 用参数 1 替换占位符
          else {
            _args.splice(_holes[index], 1, arg);
            _holes.splice(index, 1);
          }
        } else {
          _args.push(arg);
        }
      }
      if (_holes.length || _args.length < length) {
        return curry.call(this, fn, _args, _holes);
      } else {
        return fn.apply(this, _args);
      }
    };
  }

  var _ = {};

  var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
  });

  // 验证 输出全部都是 [1, 2, 3, 4, 5]
  fn(1, 2, 3, 4, 5);
  fn(_, 2, 3, 4, 5)(1);
  fn(1, _, 3, 4, 5)(2);
  fn(1, _, 3)(_, 4)(2)(5);
  fn(1, _, _, 4)(_, 3)(2)(5);
  fn(_, 2)(_, _, 4)(1)(3)(5);
})();

// -- TODO: 继续
