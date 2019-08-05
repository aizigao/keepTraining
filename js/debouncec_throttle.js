// debounce
function debounce(func, delay) {
  var timer;
  return function() {
    clearTimeout(timer);
    var context = this,
      args = [].slice.call(arguments);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

const delay = ms => new Promise(res => setTimeout(res, ms));

// throttle
function throttle(fn, threshold = 160) {
  var timeout;
  var start = new Date();
  return function() {
    const context = this;
    const args = [].slice.call(arguments);
    const curr = new Date() - 0;
    clearTimeout(timeout);

    if (curr - start >= threshold) {
      fn.apply(context, args);
      start = curr;
    } else {
      timeout = setTimeout(function() {
        fn.apply(context, args);
      }, threshold);
    }
  };
}

// 第六版
function debounce2(func, wait, immediate) {
  var timeout, result;

  var debounced = function() {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
