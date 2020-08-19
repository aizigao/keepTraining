const myQs = {
  parse: (str) => {
    if (!str) {
      return {};
    }
    return str.split("&").reduce((assem, cur) => {
      const [key, valueEncoded] = cur.split("=");

      let value = decodeURIComponent(valueEncoded).replace(/\+/g, " ");
      if (/^(-)?[1-9]\d+$/.test(value)) {
        value = Number(value);
      } else if ("true" === value) {
        value = true;
      } else if ("false" === value) {
        value = false;
      } else if ("null" === value) {
        value = null;
      } else if ("undefined" === value) {
        value = undefined;
      }
      return {
        ...assem,
        [key]: value,
      };
    }, {});
  },
  stringify(obj) {
    const keys = Object.keys(obj);
    const str = keys.reduce((assemStr, key) => {
      const valueOrigin = obj[key];
      value = encodeURIComponent(valueOrigin);
      return assemStr + "&" + [key, value].join("=");
    }, "");
    return str.replace(/^&/, "");
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
    "string=xxxx&number=1234&boolean=true&object=%5Bobject%20Object%5D&nil1=null&nil2=undefined"
  )
);
