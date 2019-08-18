// 版本一
// 可以创建promise对象实例。
// promise实例传入的异步方法执行成功就执行注册的成功回调函数，失败就执行注册的失败回调函数。
(() => {
  console.log("------------版本一-----------");
  function MyPromise(fn) {
    self = this;
    self.value = null; // value
    self.error = null; // failed value
    self.onFulfilled = null; // success cb
    self.onReject = null; // fail cb

    function resolve(value) {
      self.value = value;
      self.onFulfilled(self.value);
    }

    function reject(error) {
      self.error = error;
      self.onReject(self.error);
    }
    fn(resolve, reject);
  }
  MyPromise.prototype.then = function(onFulfilled, onReject) {
    this.onFulfilled = onFulfilled;
    this.onReject = onReject;
  };

  var promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
      // reject(new Error("xxx"));
    }, 0);
  });

  promise.then(
    data => {
      console.log(data);
    },
    err => {
      console.log(err);
    }
  );

  // 同步任务
  // let promise2 = new MyPromise((resolve, reject) => {
  //   resolve("同步任务执行");
  // });
})();
var a = () => {};

// ---------版本二
// 我们知道，我们在使用es6 的promise时，可以传入一个异步任务，也可以传入一个同步任务，但是我们的上面基础版代码并不支持同步任务，如果我们这样写就会报错：我们知道，我们在使用es6 的promise时，可以传入一个异步任务，也可以传入一个同步任务，但是我们的上面基础版代码并不支持同步任务，如果我们这样写就会报错：
(() => {
  console.log("------------版本二-----------");
  function MyPromise(fn) {
    self = this;
    self.value = null; // value
    self.error = null; // failed value
    self.onFulfilled = null; // success cb
    self.onReject = null; // fail cb

    function resolve(value) {
      //利用setTimeout特性将具体执行放到then之后
      setTimeout(() => {
        self.value = value;
        self.onFulfilled(self.value);
      });
    }

    function reject(error) {
      setTimeout(() => {
        self.error = error;
        self.onReject(self.error);
      });
    }
    fn(resolve, reject);
  }
  MyPromise.prototype.then = function(onFulfilled, onReject) {
    this.onFulfilled = onFulfilled;
    this.onReject = onReject;
  };

  var promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
      // reject(new Error("xxx"));
    }, 0);
  });
  promise.then(
    data => {
      console.log(data);
    },
    err => {
      console.log(err);
    }
  );

  // 同步任务
  let promise2 = new MyPromise((resolve, reject) => {
    resolve("同步任务执行");
  });
  promise2.then(d => console.log(d));
})();

var a = () => {};

// -- 版本三
// 支持三种状态
// pending/fulfilled/rejected
// 只有两种可能：从pending变为fulfilled和从pending变为rejected。
(() => {
  console.log("------------版本三-----------");
  // 定义三种状态
  const PENDING = "pending";
  const FULLFILLED = "fullfilled";
  const REJECT = "reject ";
  function MyPromise(fn) {
    self = this;
    self.value = null; // value
    self.error = null; // failed value

    self.status = PENDING;

    self.onFulfilled = null; // success cb
    self.onReject = null; // fail cb

    function resolve(value) {
      // 利用setTimeout特性将具体执行放到then之后
      // 只有 pending才执行
      if (self.status === PENDING) {
        setTimeout(() => {
          self.status = FULLFILLED;
          self.value = value;
          self.onFulfilled(self.value);
        });
      }
    }

    function reject(error) {
      if (self.status === PENDING) {
        setTimeout(() => {
          self.status = REJECT;
          self.error = error;
          self.onReject(self.error);
        });
      }
    }
    fn(resolve, reject);
  }

  // 我们在then中判断，如果这个promise已经变为"fulfilled"或"rejected"就立刻执行它的回调，并把结果传入。
  MyPromise.prototype.then = function(onFulfilled, onReject) {
    if (this.status === PENDING) {
      this.onFulfilled = onFulfilled;
      this.onReject = onReject;
    } else if (this.status === FULLFILLED) {
      //如果状态是fulfilled，直接执行成功回调，并将成功值传入
      onFulfilled(this.value);
    } else {
      //如果状态是rejected，直接执行失败回调，并将失败原因传入
      onReject(this.error);
    }
  };

  var promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
      // reject(new Error("xxx"));
    }, 0);
  });
  promise.then(
    data => {
      console.log(data);
    },
    err => {
      console.log(err);
    }
  );

  // 同步任务
  let promise2 = new MyPromise((resolve, reject) => {
    resolve("同步任务执行");
  });
  promise2.then(d => console.log(d));
})();

var a = () => {};
//
//
//
//
//
//
//
//
//
// -- 版本四---------
// 链式操作
// promise.then(f1).then(f2).then(f3)
// 想支持链式操作，其实很简单，首先存储回调时要改为使用数组
// self.onFulfilledCallbacks = [];
// self.onRejectedCallbacks = [];
// 复制代码当然执行回调时，也要改成遍历回调数组执行回调函数
// self.onFulfilledCallbacks.forEach((callback) => callback(self.value));
// then 加 return this

(() => {
  console.log("------------版本四-----------");
  // 定义三种状态
  const PENDING = "pending";
  const FULLFILLED = "fullfilled";
  const REJECT = "reject ";
  function MyPromise(fn) {
    self = this;
    self.value = null; // value
    self.error = null; // failed value

    self.status = PENDING;

    // -----*********这里******/
    self.onFulfilled = []; // success cbs
    self.onReject = []; // fail cbs
    // -----*********这里******/

    function resolve(value) {
      // 利用setTimeout特性将具体执行放到then之后
      // 只有 pending才执行
      if (self.status === PENDING) {
        setTimeout(() => {
          self.status = FULLFILLED;
          self.value = value;
          self.onFulfilled.forEach(cb => {
            cb(self.value);
          });
        });
      }
    }

    function reject(error) {
      if (self.status === PENDING) {
        setTimeout(() => {
          self.status = REJECT;
          self.error = error;
          self.onReject.forEach(cb => {
            cb(self.error);
          });
        });
      }
    }
    fn(resolve, reject);
  }

  // 我们在then中判断，如果这个promise已经变为"fulfilled"或"rejected"就立刻执行它的回调，并把结果传入。
  MyPromise.prototype.then = function(onFulfilled, onReject) {
    if (this.status === PENDING) {
      this.onFulfilled.push(onFulfilled);
      this.onReject.push(onReject);
    } else if (this.status === FULLFILLED) {
      //如果状态是fulfilled，直接执行成功回调，并将成功值传入
      onFulfilled(this.value);
    } else {
      //如果状态是rejected，直接执行失败回调，并将失败原因传入
      onReject(this.error);
    }
    return this;
  };

  var promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
      // reject(new Error("xxx"));
    }, 0);
  });
  promise.then(
    data => {
      console.log(data);
    },
    err => {
      console.log(err);
    }
  );

  // 同步任务
  let promise2 = new MyPromise((resolve, reject) => {
    resolve("同步任务执行");
  });
  promise2.then(d => console.log(d));
})();

/// --- https://juejin.im/post/5b16800fe51d4506ae719bae 未完成
