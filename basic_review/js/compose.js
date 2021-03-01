const add = (a) => a + 100;

const multiple = (m) => m * 2;

const subtract = (s) => s - 100;

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...nextFnOrArgs) => a(b(...nextFnOrArgs)));
}

// add(multiple(subtract(200)))
var a = compose(add, multiple, subtract)(200);

console.log(add(multiple(subtract(200))));

console.log(a);

// f(x,y,z) = (x+100) * y - z

const fn = (x, y, z) => (x + 100) * y - z;

const fn2 = (x) => (y) => (z) => (x + 100) * y - z;

console.log(fn(1, 2, 3));
console.log(fn2(1)(2)(3));
