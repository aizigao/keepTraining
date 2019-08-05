let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = Promise.resolve(3);

let promiseAll = Promise.all([promise1, promise2, promise3]);

promiseAll.then(res => {
  console.log(res);
});

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    // -- promise is array ?
    var counter = 0;
    var len = promises.length;
    var result = [];

    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        val => {
          counter++;
          result[i] = val;
          if (counter === len) {
            return resolve(result);
          }
        },
        function(e) {
          return reject(e);
        }
      );
    }
  });
};
