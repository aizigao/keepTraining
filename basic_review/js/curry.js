function curry1(fn, length) {
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var fn = curry1(function (a, b, c) {
  return [a, b, c];
});

fn("a", "b", "c"); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]
fn("a")("b")("c"); // ["a", "b", "c"]
fn("a")("b", "c"); // ["a", "b", "c"]
