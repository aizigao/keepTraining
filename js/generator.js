// 添加遍历器

let obj = {
  name: "zhangsan",
  age: 18,
  sex: "man"
};
obj[Symbol.iterator] = function*() {
  for (var key in obj) {
    yield obj[key];
  }
};

for (var value of obj) {
  console.log(value);
}

//--
//
let res = 0;
//封装一个网络请求函数，不做实际动作，就打印一下参数param
function ajaxMy(method, url, param, varibal) {
  console.log(param);
  //使用延时计时器模拟网络请求1秒后返回正确结果response
  setTimeout(function() {
    let response = res++;
    varibal.next(response);
  }, 300);
}

let k;
let tell = function*() {
  //网络请求1
  let a = yield ajaxMy("get", "www.baidu.com", 10, k);
  console.log({ a }); //0
  //网络请求2
  let b = yield ajaxMy("get", "www.baidu.com", a, k);
  console.log({ b }); //1
  //网络请求3
  let c = yield ajaxMy("get", "www.baidu.com", b, k);
  console.log({ c }); //2
  //网络请求4
  let d = yield ajaxMy("get", "www.baidu.com", c, k);
  console.log({ d }); //3
};
k = tell();
k.next();

// ----- 状态机
let state = function*() {
  while (1) {
    yield "block";
    yield "none";
  }
};
let displayClass = state();
console.log(displayClass.next().value); //block
console.log(displayClass.next().value); //none
console.log(displayClass.next().value); //block
console.log(displayClass.next().value); //none

// --- 只有当code的状态变为200成功响应才会停止发送请求，否则每个1300毫秒发送一次请求

// next 为上个yield结果赋值
function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}
var b = foo(5);
var z1 = b.next(); // { value:6, done:false }
var z2 = b.next(12); // { value:8, done:false }
var z3 = b.next(13); // { value:42, done:true }
console.log({
  z1,
  z2,
  z3
});
