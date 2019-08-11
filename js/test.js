/**
如输入[[1,2],[3,4],[5,6]] 
输出： 
[ 1, 3, 5 ] 
[ 1, 3, 6 ] 
[ 1, 4, 5 ] 
[ 1, 4, 6 ] 
[ 2, 3, 5 ] 
[ 2, 3, 6 ] 
[ 2, 4, 5 ] 
[ 2, 4, 6 ]

 **/

/**
 *
    [[1]] --> [[1]]
    [[1,2]] --> [[1],[2]]
    [[1,2,3]] --> [[1],[2],[3]]
    [[1,2],[3,4]] --> [[1,3],[1,4],[2,3],[2,4]]
 */

var foo = (arrs, accumulator) => {
  let storeArr = [];
  let [first, ...restArrs] = arrs;
  if (!accumulator) {
    accumulator = [[]];
  }
  for (let i in accumulator) {
    for (let j in first) {
      storeArr.push(accumulator[i].concat(first[j]));
    }
  }

  if (restArrs.length < 1) {
    return storeArr;
  } else {
    return foo(restArrs, storeArr);
  }
};

var test = [
  // --
  [1, 2],
  [3, 4],
  [5, 6],
  [6, 7, 8]
];
const result = foo(test);

console.log(result);


