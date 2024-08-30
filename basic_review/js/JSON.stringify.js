// https://blog.stackademic.com/the-json-stringify-you-dont-know-about-e0d21de6f4b3


const log = (() => {
  let count = 0

  return (...message) => {
    count += 1
    console.log('ord' + count, ...message)
  }
})()



{
  const data = {
    a: "aaa",
    b: undefined,
    c: Symbol("dd"),
    fn: function () {
      return true;
    }
  };
  log(JSON.stringify(data)); // "{"a":"aaa"}"
}


{
  log(
    JSON.stringify([
      "aaa",
      undefined,
      function aa() { return true },
      Symbol('dd')
    ])  // "["aaa",null,null,null]"
  )
}


{
  // If the value being converted has a toJSON() function, the serialization result will be whatever value that function returns, and the values of other properties will be ignored.
  log(JSON.stringify({
    say: "hello JSON.stringify",
    toJSON: function () {
      return "today i learn";
    }
  }))
  // "today i learn"


  // JSON.stringify() will serialize Date values normally. In fact, the Date object itself implements the toJSON() method (equivalent to Date.toISOString()), so the Date object is treated as a string.
  log(JSON.stringify({ now: new Date() })) // {"now":"2024-08-30T01:37:03.814Z"}
}


{
  // Numeric values in the format of NaN and Infinity, as well as null, will all be treated as null.

  log(

    JSON.stringify(NaN),
    // "null"
    JSON.stringify(null),
    // "null"
    JSON.stringify(Infinity),
    // "null"
  )
}


{
  // Wrapper objects for booleans, numbers, and strings will be automatically converted to their corresponding primitive values during serialization.
  log(JSON.stringify([new Number(1), new String("false"), new Boolean(false)]))
  // "[1,"false",false]"
}


{
  // Objects of other types, including Map/Set/WeakMap/WeakSet, will only serialize enumerable properties.Non-enumerable properties are ignored by default.

  log(
    JSON.stringify(
      Object.create(
        null,
        {
          x: { value: 'json', enumerable: false },
          y: { value: 'stringify', enumerable: true }
        }
      ) // // "{"y":"stringify"}"
    )
  )
}


{
  // Properties with a symbol as the property key will be completely ignored, even if they are explicitly included in the replacer parameter.

  log(JSON.stringify({ [Symbol.for("json")]: "stringify" }, function (k, v) {
    if (typeof k === "symbol") {
      return v;
    }
  }))

}



{
  const data = {
    a: "aaa",
    b: undefined,
    c: Symbol("dd"),
    fn: function () {
      return true;
    }
  };
  // Without using the replacer parameter
  log(JSON.stringify(data))
  // "{"a":"aaa"}"

  // When using the replacer parameter as a function
  log(JSON.stringify(data, (key, value) => {
    switch (true) {
      case typeof value === "undefined":
        return "undefined";
      case typeof value === "symbol":
        return value.toString();
      case typeof value === "function":
        return value.toString();
      default:
        break;
    }
    return value;
  }))
  // "{"a":"aaa","b":"undefined","c":"Symbol(dd)","fn":"function() {\n    return true;\n  }"}"
}