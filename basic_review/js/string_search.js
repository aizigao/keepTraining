// 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。
const logFn = fn => (...args) => {
  console.log(fn(...args));
};

// 正则
function isContain(findStr, orginStr) {
  const reg = new RegExp(findStr);
  const execResult = reg.exec(orginStr);
  return execResult ? execResult.index : -1;
}


const isContainLog = logFn(isContain)
a = "34";
b = "1234567"; // 返回 2
isContainLog(a, b);
a = "35";
b = "1234567"; // 返回 -1
isContainLog(a, b);
a = "355";
b = "12354355"; // 返回 5
isContainLog(a, b);
