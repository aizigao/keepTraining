const increment = (() => {
  function* inner() {
    let count = 1;
    while (true) {
      yield count++;
    }
  }

  const gen = inner();
  return () => {
    return gen.next().value;
  };
})();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
