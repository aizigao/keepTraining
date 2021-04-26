const listIt = (v) => {
  if (Array.isArray(v)) {
    return v;
  }
  return [v];
};
const myQs = {
  parse: (str) => {
    if (!str) {
      return {};
    }

    return str.split("&").reduce((assem, singleStr) => {
      let [key, value] = singleStr.split("=").map((i) => decodeURIComponent(i));

      // 处理基本类型

      switch (true) {
        // boolean
        case value === "true":
          value = true;
          break;
        case value === "false":
          value = false;
          break;
        // nil
        case value === "null":
          value = null;
          break;
        case value === "undefined":
          value = undefined;
          break;
        // number
        case /^[-+]?\d+$/.test(value):
          value = Number(value);
          break;

        // default
        default:
          value = value;
      }

      return {
        ...assem,
        [key]: key in assem ? [...listIt(assem[key]), value] : value,
      };
    }, {});
  },

  stringify(obj) {
    const keys = Object.keys(obj);
    const rst = keys.reduce((assemStr, key) => {
      const keyEncoded = encodeURIComponent(key);
      const valueEncoded = encodeURIComponent(obj[key]);
      return assemStr + "&" + [keyEncoded, valueEncoded].join("=");
    }, "");
    return rst.replace(/^&/, "");
  },
};

console.log(
  myQs.stringify({
    string: "xxxx",
    number: 1234,
    boolean: true,
    object: { dfsdfd: "xx" },
    nil1: null,
    nil2: undefined,
  })
);

console.log(
  myQs.parse(
    "string=xxxx&number=1234&boolean=true&object=%5Bobject%20Object%5D&nil1=null&nil2=undefined&test=test1&test=test2"
  )
);
