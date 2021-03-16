// 普通的compose
function syncCompose(...funcs) {
  if (funcs.length === 0) {
    return (v) => v;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...nextFnsOrArgs) => a(b(...nextFnsOrArgs)));
}

// -- simplify version in koa 异步版
function compose(middleware) {
  return function (context, next) {
    let index = -1;

    function dispatch(i) {
      index = i;
      let fn = middleware[i];
      // 终了
      if (i === middleware.length) fn = next;

      // --
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}
