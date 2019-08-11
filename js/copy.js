// array shadow copy
//

var arr = ["old", 1, true, null, undefined];

var new_arr = arr.concat();
new_arr.unshift("222");
var newArr2 = arr.slice();

console.log(arr, new_arr, newArr2);

// deep copy

// 简单粗暴
var new_arr3 = JSON.parse(JSON.stringify(arr));
// -- 函数不可以

console.log({ new_arr3 });

var shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== "object") return;
  // 根据obj的类型判断是新建一个数组还是对象
  var newObj = obj instanceof Array ? [] : {};
  // 遍历obj，并且判断是obj的属性才拷贝
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

var deepCopy = function(obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
};


// 上述方法不会复制 setter 和 getter


var extend = function(to, from){
    for(var property in from){
        if(!from.hasOwnProperty(property)){
            continue
        }
        Object.defineProperty(to, property, Object.getOwnPropertyDescriptor(from, property))
    }
}


var test = {}
extend(test, {b: 'dfsfd', get a(){ return 1}})

console.log(test)
