const list = [20, 15, 9, 132];

// f(x) = max(f(x-1)+n)
const findMax = (alist) => {
  if (alist.length === 0) {
    return 0;
  }
  if (alist.length == 1) {
    return alist[0];
  }
  const curr = alist.pop()

  const prev = findMax(alist)

  return Math.max(
    Number(""+prev+curr),
    Number(""+curr+prev),
  )
};

console.log(findMax(list));
