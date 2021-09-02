import { add } from "./testM.js";
import _ from "lodash";
import { default as m2 } from "./testCjs.cjs";

console.log("main run");

console.log(add(1, 2));
console.log(m2.add2(2, 3));
console.log(_.get);
