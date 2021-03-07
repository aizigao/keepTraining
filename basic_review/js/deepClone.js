// 正则对象跟日期对象 没有处理
function clone(obj) {
  if (!obj && typeof obj !== "object") {
    return;
  }
  var newObj = obj.constructor === Object ? {} : [];
  for (var key in obj) {
    newObj[key] =
      obj[key] && typeof obj[key] === "object" ? clone(obj[key]) : obj[key];
  }
  return newObj;
}
