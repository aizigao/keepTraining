const list = [20, 15, 9, 132];

// f(x) = max(+(""+f(x-1)+n), +(""+n+f(x-1))
const findMax = (alist) => {
  const n = alist.length;
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return alist[0];
  }

  const curV = alist.pop();
  const prevMax = findMax(alist);
  return Math.max(+("" + curV + prevMax), +("" + prevMax + curV));
};

console.log(findMax(list));
