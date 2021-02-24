var obj = { x: 1, y: 2, z: 3 };

obj[Symbol.iterator] = function () {
  let keys = Object.keys(this);
  let index = 0;
  return {
    next: () => {
      if (index < keys.length) {
        return { value: this[keys[index++]] };
      } else {
        return { done: true };
      }
    },
  };
};

console.log(obj);
