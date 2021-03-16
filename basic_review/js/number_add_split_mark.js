// 将一个任意长的数字变成逗号分割的格式
const { replace } = require("lodash");
const logFn = require("./logFn");

const parseOrigin = (num, cutLen = 3, mark = ",") => {
  if (!num) {
    return "";
  }

  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, ".");
  integer = integer.replace(/\d(?=(\d{3})+$)/g, "$&,");
  return integer + "." + (decimal ? decimal : "");
};

const parseStr = logFn(parseOrigin);
parseStr(1234.56); // 1,234.56
parseStr(123456789); //123,456,789
parseStr(1087654.321); // 1.087,654,321
