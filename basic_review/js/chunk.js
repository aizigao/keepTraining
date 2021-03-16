const chunk = (arr, size) => {
  const ans = [];
  for (let i = 0; i < arr.length; i += size) {
    ans.push(arr.slice(i, i + size));
  }
  return ans;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 9], 3));
