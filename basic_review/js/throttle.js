var count = 1;
var container = document.getElementById("container");
var button = document.getElementById("button");

function getUserAction() {
  container.innerHTML = count;
  count += 1;
}

// -- 1
function throttle(func, wait) {
  var previous = new Date();

  return function() {
    const now = new Date();
    const context = this;

    if (now - previous > wait) {
      func.apply(context, arguments);
      previous = now;
    }
  };
}

// 2-- 使用定时器
// 有延时
function throttle2(func, wait) {
  var timeout = null;
  var previous = 0;
  return function() {
    var context = this;
    var arg = arguments;
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, arg);
      }, wait);
    }
  };
}

// 3 结1，2
function throttle3(func, wait) {
  var timeout, context, args, result;

  var previous;

  var later = function() {
    previous = +new Date();
    timeout = null;
    func.apply(context, args);
  };

  var throttled = function() {
    var now = +new Date();
    // 下次触发 func 剩余时间
    var remaining = wait - (now - previous);

    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
}

// container.onmousemove = throttle(getUserAction, 1000);
// container.onmousemove = throttle2(getUserAction, 1000);
container.onmousemove = throttle3(getUserAction, 1000);
// container.onmousemove = throttle4(getUserAction, 1000, true);
//

// var setUserAction = throttle1(getUserAction, 10000, true);
// container.onmousemove = setUserAction;
button.onclick = () => {
  setUserAction.cancel();
};
