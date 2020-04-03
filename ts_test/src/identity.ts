function identity<T>(arg: T): T {
  return arg;
}

let output = identity<number>(1);

// ----

function logginIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

let myIdentity: <T>(arg: T) => T = s => {
  return s;
};

let myIdentity2: { <T>(arg: T): T } = identity;

// interface

interface GenericIdentityFn {
  <T>(arg: T): T;
}

// class

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};
