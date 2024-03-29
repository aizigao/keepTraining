/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Recursively flatten array up to depth times.
  
  For example:
  
  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```
  
  If the depth is provided, it's guaranteed to be positive integer.
  
  > View on GitHub: https://tsch.js.org/3243
*/

/* _____________ Your Code Here _____________ */

type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R]
    ? [...(F extends [...infer K] ? K : [F]), ...FlattenOnce<R>]
    : T;
type FlattenDepth<
    T,
    Times extends number = 1,
    P extends any[] = []
> = T extends any[]
    ? P extends { length: Times }
        ? T
        : T extends FlattenOnce<T>
        ? T
        : FlattenDepth<FlattenOnce<T>, Times, [...P, any]>
    : never;

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

type cases = [
    Expect<Equal<FlattenDepth<[]>, []>>,
    Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
    Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
    Expect<
        Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
    >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3243/answer
  > View solutions: https://tsch.js.org/3243/solutions
  > More Challenges: https://tsch.js.org
*/
