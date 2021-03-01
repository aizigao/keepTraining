// 我们已经知道如何书写函数式的程序了，即通过管道把数据在一系列纯函数间传递的程序。我们也知道了，这些程序就是声明式的行为规范。但是，控制流（control flow）、异常处理（error handling）、异步操作（asynchronous actions）和状态（state）呢？还有更棘手的作用（effects）呢？本章将对上述这些抽象概念赖以建立的基础作一番探究

// --- 存放数据的箱子

var Container = function (x) {
  this.__value = x;
};

// 我们将使用 Container.of 作为构造器（constructor），这样就不用到处去写糟糕的 new 关键字
Container.of = (x) => {
  return new Container(x);
};

{
  // ------

  console.log(Container.of(3));

  // Container(3)
}

{
  // (a -> b) -> Container a -> Container b
  Container.prototype.map = function (f) {
    return Container.of(f(this.__value));
  };

  Container.of(2).map(function (two) {
    return two + 2;
  });
  //=> Container(4)
}
//functor 是实现了 map 函数并遵守一些特定规则的容器类型
