/*
  4182 - 斐波那契序列
  -------
  by windliang (@wind-liang) #中等 
  
  ### 题目
  
  Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
  
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  
  For example
  ```js
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```
  
  > 在 Github 上查看：https://tsch.js.org/4182/zh-CN
*/

/* _____________ 你的代码 _____________ */

// type Fibonacci<T extends number> = any;

type Fibonacci<
    T extends number,
    // 表示循环下标
    TArray extends ReadonlyArray<unknown> = [unknown, unknown, unknown],
    // 表示前一个的前一个的值
    PrePre extends ReadonlyArray<unknown> = [unknown],
    // 表示前一个的值
    Pre extends ReadonlyArray<unknown> = [unknown]
> = T extends 1
    ? 1
    : T extends 2
    ? 1
    : T extends TArray["length"]
    ? [...Pre, ...PrePre]["length"]
    : Fibonacci<T, [...TArray, unknown], Pre, [...Pre, ...PrePre]>;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4182/answer/zh-CN
  > 查看解答：https://tsch.js.org/4182/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
