/********************
\ 转义
^ 头
$ 尾
. 换行符外任意
* {0,} 0 or 多
+ {1,} 1 or 多
? {0,1} 0 or 1


+? *? {}? 非贪婪模式

(x) 匹配
(?:x) 匹配不捕获 non-capturing parentheses,


x(?=y) 先行断言 匹配x lookahead
x(?!y) 正向否定 匹配x negated lookahead.

(?<=y)x 后行断言 匹配x lookbehind
(?<!y)x 匹配x negated lookbehind

{n}
{n,}
{n,m}

x|y

[xyz] Charactor set
[^xyz] A negated or complemented character set

[\b] match backspace U+0008
\b word boundary
\B
\cX 控制符 control+X
\d
\D
\f match a form feed U+00C 换页
\n match a line feed U+00A
\s Matches a white space character, including space, tab, form feed, line feed. Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff].
\S
\t match a tab
\v match vertical tab
\w

\0 NULL U+0000
\xhh
\uhhhh
\u{hhhh}
********************/

/*********************
 *  -------- 标志------------
 *  g  全局
 *  i  大小写
 *  m   多行
 *  s   allow . to match newline character
 *  u   unicode treat a pattern as a sequence of unicode code points
 *  y   粘性搜索，匹配从目标字符串的当前位置？？？？这是人话
 **************************/

(() => {
  // ------------ exec ----------------------
  // new RegExp('d(b+)d', 'g')
  var str1 = "cdbbdbsbz";
  var execReg = /d(b+)d/g;
  var myArray = execReg.exec(str1);
  console.log("exec", { myArray });
  console.log(execReg.lastIndex, execReg.source);
  var myArray2 = execReg.exec(str1); //再次
  console.log(myArray2);
  var myArray3 = str1.match(execReg);
  console.log({ myArray3 });
  /********************
   --跟g有关系
   exec 只会匹配第一个符合的字符串（意味着g对其不起作用），跟所有分组的反向引用
   match 是否返回所有匹配的数组跟正则表达式里是否带着g有关系
   ********************/
  // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
  // "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while
  // /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ "dbbd", "bb", index: 1, input: "cdbbdbsbz" ].

  // --- myArray
  //  - 配匹值及捕获 dbbd bb
  //  - index 索引位置 1
  //  - input 初始字符串 str1
  // ----- execReg
  //  - lastIndex 下一个索引值 只有在g时可用 5
  //  - source 模式文本 d(b+)d
})();

var a = () => {};

(function() {
  // match
  var re = /\w+\s/g;
  var str = "fee fi fo fum";
  var myArray = str.match(re);
  console.log("match", myArray);
  // ["fee ", "fi ", "fo "]
})();
var a = () => {};

(() => {
  var re = /\w+\s/g;
  var str = "fee fi fo fum";

  //--
  var xArray;
  while ((xArray = re.exec(str))) {
    console.log(xArray);
  }
  // produces:
  // ["fee ", index: 0, input: "fee fi fo fum"]
  // ["fi ", index: 4, input: "fee fi fo fum"]
  // ["fo ", index: 7, input: "fee fi fo fum"]
})();
// test
// matchAll
// search
// replace
// split
// string.split string.replace
