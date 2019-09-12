var count = 1;

var container = document.getElementById("container");
var button    = document.getElementById("button");

function getUserAction() {
  container.innerHTML = count;
  count += 1;
}

// 第一版
function debounce(func, wait) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// 第二版

function debounce2(func, wait) {
  var timer;
  return function() {
    var context = this;
    clearTimeout(timer);
    var args = [].slice.call(arguments);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

//立即执行
function debounce4(func, wait, immediate) {
  var timer;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (immediate) {
      var callNow = !timer; // timer 为null时，指第一次
      timer = setTimeout(function() {
        timer = null;
      }, wait);
      callNow && func.apply(context, args);
    } else {
      timer = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
}

// 返回值处理
function debounce5(func, wait, immediate) {
  var timer, result;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (immediate) {
      var callNow = !timer; // timer 为null时，指第一次
      timer = setTimeout(function() {
        timer = null;
      }, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      timer = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
}

// add cancel

function debounce6(func, wait, immediate) {
  var timeout

  const debounced = function() {
    var args = arguments;
    var context = this;
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      callNow && func.apply(context, args);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
  debounced.cancel = () => {
    console.log('cancel')
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

// container.onmousemove = debounce(getUserAction, 1000);
// container.onmousemove = debounce2(getUserAction, 1000);
// container.onmousemove = debounce3(getUserAction, 1000);
// container.onmousemove = debounce4(getUserAction, 1000, true);
//

var setUserAction = debounce6(getUserAction, 10000, true);
container.onmousemove = setUserAction;
console.log(button)
button.onclick = () => {
  setUserAction.cancel();
};
