// console.log(String.fromCharCode(110));

const randomString = (n) => {
  const tplStr = "1234567890qwertyuiopasdfghjklzxcvbnm";

  let rst = "";
  for (let i = 0; i < n; i++) {
    const randomidx = Math.round(Math.random() * tplStr.length);
    rst += tplStr[randomidx];
  }
  return rst;
};

console.log(randomString(3));
console.log(randomString(13));
