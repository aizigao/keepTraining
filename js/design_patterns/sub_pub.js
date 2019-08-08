class Event {
  constructor() {
    this.subscribers = new Map([["any", []]]);
  }
  on(fn, type = "any") {
    const subs = this.subscribers;
    if (subs.get(type)) {
      subs.set(type, sub.get(type).push(fn));
    } else {
      subs.set(type, [fn]);
    }
  }
  // once(...args) {
  //   this.on(...args);
  //   this.remove(...args);
  // }
  emit(content, type = "any") {
    const subs = this.subscribers;
    for (let fn of subs.get(type)) {
      fn(content);
    }
  }
  remove(removedFn, type = "any") {
    const subs = this.subscribers;

    const newSub = subs.get(type).filter(fn => {
      return fn !== removedFn;
    });
    subs.set(type, newSub);
  }
}

let event = new Event();
const fn = str => {
  console.log(str);
};
const fn2 = str => console.log("fn2" + str);

event.on(fn, "test");

event.emit("testString hi jojo", "test");
event.emit("testString hi jojo", "test");
event.remove(fn, "test");
// event.emit("testString hi jojo", "test"); // 不执行
// event.once(fn2, "testOnce");
// event.emit("xxxx", "testOnce");
// event.emit("xxxx", "testOnce"); // 不执行
