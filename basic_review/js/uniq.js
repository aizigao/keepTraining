var array = [1, 1, "1", "1"];

function uniq(array) {
  var res = [];

  for (var i = 0, len = array.length; i < len; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(uniq(array));

function uniq2(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }
  return res;
}

console.log(uniq2(array));

// 上面都有 NaN !== NaN 的问题
//

// 排序后
//
//
function unique3(array) {
  var res = [];
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
  return res;
}

console.log(unique3(array));

// 知道了这两种方法后，我们可以去尝试写一个名为 unique 的工具函数，我们根据一个参数 isSorted 判断传入的数组是否是已排序的，如果为 true，我们就判断相邻元素是否相同，如果为 false，我们就使用 indexOf 进行判断
// 第一版
function unique3(array, isSorted) {
  var res = [];
  var seen = [];

  for (var i = 0, len = array.length; i < len; i++) {
    var value = array[i];
    if (isSorted) {
      if (!i || seen !== value) {
        res.push(value);
      }
      seen = value;
    } else if (res.indexOf(value) === -1) {
      res.push(value);
    }
  }
  return res;
}

// filter
function uniq4(array) {
  return array.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}

function uniq5(array) {
  return array
    .concat()
    .sort()
    .filter(function(item, index, array) {
      return !index || item !== array[index - 1];
    });
}

function uni5(array) {
  var obj = {};
  return array.filter(function(item, index, array) {
    return obj.hasOwnProperty(item) ? false : (obj[item] = true);
  });
}

// 我们可以发现，是有问题的，因为 1 和 '1' 是不同的，但是这种方法会判断为同一个值，这是因为对象的键值只能是字符串，所以我们可以使用 typeof item + item 拼成字符串作为 key 值来避免这个问题：

function uni5_1(array) {
  var obj = {};
  return array.filter(function(item, index, array) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}

function uniq5_2(array) {
  var obj = {};
  return array.filter(function(item, index, array) {
    console.log(typeof item + JSON.stringify(item));
    return obj.hasOwnProperty(typeof item + JSON.stringify(item))
      ? false
      : (obj[typeof item + JSON.stringify(item)] = true);
  });
}

//
//
// es6
//
function uniq6(array) {
  return [...new Set(array)];
}

var str1 = "1";
var str2 = new String("1");

console.log(str1 == str2); // true
console.log(str1 === str2); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(/a/ == /a/); // false
console.log(/a/ === /a/); // false

console.log({} == {}); // false
console.log({} === {}); // false

var array = [
  1,
  1,
  "1",
  "1",
  null,
  null,
  undefined,
  undefined,
  new String("1"),
  new String("1"),
  /a/,
  /a/,
  NaN,
  NaN
];
