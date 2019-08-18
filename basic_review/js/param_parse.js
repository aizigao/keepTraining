function parseParams(url) {
  const paramStr = url.replace(/^.*\?/, "").replace(/\#.*$/, "");
  const paramArr = paramStr.split("&");
  const paramObj = {};

  paramArr.forEach(param => {
    if (/=/.test(param)) {
      const [key, orginVal] = param.split("=");
      // 解码与数字处理
      let val = decodeURIComponent(orginVal);
      val = /\d+(\.\d+)?/.test(val) ? parseFloat(val) : val;

      if (key in paramObj) {
        paramObj[key] = [].concat(paramObj[key], val);
      } else {
        paramObj[key] = val;
      }
    } else {
      paramObj[param] = true;
    }
  });
  return paramObj;
}
console.log(
  parseParams(
    "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled#34234-dfsdf"
  )
);
