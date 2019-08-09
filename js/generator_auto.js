// 第一版
function run(gen) {
  var gen = gen();

  function next(data) {
    var result = gen.next(data);
    if (result.done) return;

    if (isPromise(result.value)) {
      result.value.then(function(data) {
        next(data);
      });
    } else {
      result.value(next);
    }
  }

  next();
}

function isPromise(obj) {
  return "function" == typeof obj.then;
}
