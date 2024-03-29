/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  实现内置的Exclude <T，U>类型，但不能直接使用它本身。
  >从联合类型T中排除U的类型成员，来构造一个新的类型。
  
  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/

/* _____________ 你的代码 _____________ */

// type MyExclude<T, U> = any; // @@origin

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// 联合类型 分发

type MyExclude<T, U> = T extends U ? never : T;

type TT = MyExclude<"a" | "b" | "c", "a" | "b">;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
    Expect<
        Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>
    >,
    Expect<
        Equal<
            MyExclude<"a" | "b" | "c", "a" | "b">,
            Exclude<"a" | "b" | "c", "a" | "b">
        >
    >,
    Expect<
        Equal<
            MyExclude<string | number | (() => void), Function>,
            Exclude<string | number | (() => void), Function>
        >
    >
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/43/answer/zh-CN
  > 查看解答：https://tsch.js.org/43/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
