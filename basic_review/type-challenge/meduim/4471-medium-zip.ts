/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple
  
  ### Question
  
  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```
  
  > View on GitHub: https://tsch.js.org/4471
*/

/* _____________ Your Code Here _____________ */

// solution 1
// type Zip<T extends unknown[] = [], P extends unknown[] = [], U extends unknown[] = []> =
// U['length'] extends T['length'] | P['length']
//   ? U
//   : Zip<T, P, [...U, [T[U['length']], P[U['length']]]]>;

// solution 2
type Zip<T extends unknown[] = [], P extends unknown[] = []> = 
    T extends [ infer F, ...infer R ]
        ? P extends [infer N, ...infer M]
            ? [[F, N], ...Zip<R, M>]
            : []
        : [];

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
    Expect<Equal<Zip<[], []>, []>>,
    Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
    Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
    Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
    Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4471/answer
  > View solutions: https://tsch.js.org/4471/solutions
  > More Challenges: https://tsch.js.org
*/
