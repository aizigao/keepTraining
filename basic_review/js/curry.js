var add = (a, b) => a + b;

// 版本一
var curry = function(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

var addCurry = curry(add, 1);

var a = addCurry(2);

console.log(a);

// 第二版
//
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(
      //--
      this,
      args.concat([].slice.call(arguments))
    );
  };
}

function curry1(fn, length) {
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var fn = curry1(function(a, b, c) {
  return [a, b, c];
});

fn("a", "b", "c"); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]
fn("a")("b")("c"); // ["a", "b", "c"]
fn("a")("b", "c"); // ["a", "b", "c"]
