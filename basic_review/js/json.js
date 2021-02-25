// stringify
function jsonStringify(obj) {
  let type = typeof obj;
  if (type !== "object") {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    let json = [];
    let arr = Array.isArray(obj);
    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
}
jsonStringify({ x: 5 }); // "{"x":5}"
jsonStringify([1, "false", false]); // "[1,"false",false]"
jsonStringify({ b: undefined }); // "{"b":"undefined"}"

// --- parse --eval

{
  function jsonParse(opt) {
    return eval("(" + opt + ")");
  }
  jsonParse(jsonStringify({ x: 5 }));
  // Object { x: 5}
  jsonParse(jsonStringify([1, "false", false]));
  // [1, "false", falsr]
  jsonParse(jsonStringify({ b: undefined }));
  // Object { b: "undefined"}

  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
  if (
    rx_one.test(
      json.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")
    )
  ) {
    var obj = eval("(" + json + ")");
  }
}
