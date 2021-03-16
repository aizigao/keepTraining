const a = new Set([1, 2, 3, 4, 5]);
const b = new Set(3, 4, 6, 7);

// 交集
console.log(
  new Set(
    [...a].filter((item) => {
      return b.has(item);
    })
  )
);

// 并集
console.log(new Set([...a, ...b]));

// 差集
console.log(
  new Set(
    [...a].filter((item) => {
      return !b.has(item);
    })
  )
);
