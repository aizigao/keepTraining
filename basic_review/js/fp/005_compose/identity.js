const _ = require("lodash/fp");
// 一个名为 id 的实用函数。这个函数接受随便什么输入然后原封不动地返回它：
var id = function (x) {
  return x;
};

// 函数跟组合一起使用简直完美。下面这个特性对所有的一元函数（unary function）（一元函数：只接受一个参数的函数） f 都成立：

const f = () => {
  console.log("xxxx");
};
// identity

(_.compose(id, f) == _.compose(f, id)) == f;
// true
