let promise1 = Promise.resolve(1);
let promise3 = Promise.resolve(3);
let promise2 = Promise.resolve(2);

Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
    // -- promise is array ?
    if (!Array.isArray(promises)) {
      throw Error("arguments must be an Array");
    }
    var counter = 0;
    var result = [];
    var len = promises.length;

    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        val => {
          counter += 1;
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

Promise.myRace = function(promises) {
  return new Promise(function(resolve, reject) {
    // -- promise is array ?
    if (!Array.isArray(promises)) {
      throw Error("arguments must be an Array");
    }
    var len = promises.length;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        val => {
          resolve(val);
        },
        function(e) {
          return reject(e);
        }
      );
    }
  });
};

let promiseAll = Promise.myAll([promise1, promise2, promise3]);
let promiseRace = Promise.myRace([promise1, promise2, promise3]);

promiseAll.then(res => {
  console.log(res);
});
promiseRace.then(res => {
  console.log(res);
});
