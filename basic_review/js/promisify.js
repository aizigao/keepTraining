// cb的方法 转 promise
function promisify(original) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function callback(err, ...values) {
        if (err) {
          return reject(err);
        }
        return resolve(...values);
      });
      original.call(this, ...args);
    });
  };
}
