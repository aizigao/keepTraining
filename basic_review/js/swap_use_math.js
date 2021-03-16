// a = a + (b - a) --> a = b
function swap(a, b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}

function swap2(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

console.log(swap(1, 2));
console.log(swap(3, 4));
