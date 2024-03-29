/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  Implement the type version of ```Object.entries```
  
  For example 
  
  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```
  
  > View on GitHub: https://tsch.js.org/2946
*/

/* _____________ Your Code Here _____________ */

type ObjectEntries<T extends Record<string, any>> = {
    [key in keyof T]: [key, T[key]];
}[keyof T];

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}

type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];

type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2946/answer
  > View solutions: https://tsch.js.org/2946/solutions
  > More Challenges: https://tsch.js.org
*/
