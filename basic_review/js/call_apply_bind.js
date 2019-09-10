{
  var foo = {
    value: 1
  };

  function bar(a) {
    console.log(this.value);
    console.log(a);
    return a;
  }

  console.log("--- orgin test ---");
  bar.call(foo, "xxx"); //1
  console.log("--- orgin test end ---");

  // call 改变了this的指向， 指向到foo
  // bar函数执行了
  // 试想当调用 call 的时候，把 foo 对象改造成如下：
  /**
 var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
};

foo.bar(); // 1
 **/
}
/***
将函数设为对象的属性
执行该函数
删除该函数
 **/

Function.prototype.myCall = function(context) {
  var context = context || window;
  context.fn = this;
  var args = [];

  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  // var result = context.fn();
  var result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
};

const re = bar.myCall(foo, "xxx");
console.log({ re });

Function.prototype.myApply = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }

  delete context.fn;
  return result;
};

Function.prototype.myBind = function(context) {
  const fn = this;
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return fn.apply(context, args.concat(bindArgs));
  };
};

// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
// https://github.com/mqyqingfeng/Blog/issues/12

var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = "shopping";
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = "kevin";

var bindFoo = bar.bind(foo, "daisy");

var obj = new bindFoo("18");
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
Function.prototype.bind2 = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function() {};

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  // 直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
