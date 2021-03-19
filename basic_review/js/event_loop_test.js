console.log("start");
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function () {
    console.log("promise1");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function () {
    console.log("promise2");
  });
}, 0);
Promise.resolve().then(function () {
  console.log("promise3");
});
console.log("end");

// 浏览器为
// start => end => promise3 => timer1 => promise1 => timer2 => promise2

// node 10 下为
//start=>end=>promise3=>timer1=>timer2=>promise1=>promise2

// node 10 之后是一样的

{
  /**
   * 这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行。
   */
  setTimeout(() => {
    console.log("timer1");
    Promise.resolve().then(function () {
      console.log("promise1");
    });
  }, 0);
  process.nextTick(() => {
    console.log("nextTick");
    process.nextTick(() => {
      console.log("nextTick");
      process.nextTick(() => {
        console.log("nextTick");
        process.nextTick(() => {
          console.log("nextTick");
        });
      });
    });
  });
  // nextTick=>nextTick=>nextTick=>nextTick=>timer1=>promise1
}
