{
  // 下面的代码是一个简单的实现，尽管它不太健壮
  var memoize = function (f) {
    var cache = {};

    return function () {
      var arg_str = JSON.stringify(arguments);
      cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
      return cache[arg_str];
    };
  };
  var squareNumber = memoize(function (x) {
    return x * x;
  });

  console.log(squareNumber(4))
  //=> 16

  console.log(squareNumber(4)); // 从缓存中读取输入值为 4 的结果
  //=> 16

  console.log(squareNumber(5))
  //=> 25

  console.log(squareNumber(5)); // 从缓存中读取输入值为 5 的结果
  //=> 25
}
