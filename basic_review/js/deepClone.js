// 正则对象跟日期对象 没有处理
function deepClone(obj) {
  if (typeof obj !== "object") {
    return;
  }

  var newObj = obj.constructor === Object ? {} : [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
}
