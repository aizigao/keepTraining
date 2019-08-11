var a = [1, [2, [3, 4]]];

// flatten
//
//
function flatten(arr) {
  var result = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    const curr = arr[i];
    if (Array.isArray(curr)) {
      result = result.concat(flatten(curr));
    } else {
      result.push(curr);
    }
  }
  return result;
}


console.log(flatten(a));

// 都是数字， 用toString
//
//
a.toString()
  .split()
  .map(i => +i);
// 字符串及对象就用不了了

function flatten2(arr) {
  return arr.reduce(function(accum, next) {
    return accum.concat(
      //--
      Array.isArray(next) //--
        ? flatten2(next)
        : next
    );
  }, []);
}


console.log(flatten2(a));

// es6
console.log([].concat(...a));

/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten3(input, shallow, strict, output) {
  // 递归使用的时候会用到output
  output = output || [];
  var idx = output.length;

  for (var i = 0, len = input.length; i < len; i++) {
    var value = input[i];
    // 如果是数组，就进行处理
    if (Array.isArray(value)) {
      // 如果是只扁平一层，遍历该数组，依此填入 output
      if (shallow) {
        var j = 0,
          length = value.length;
        while (j < length) output[idx++] = value[j++];
      }
      // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
      else {
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    }
    // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
    else if (!strict) {
      output[idx++] = value;
    }
  }

  return output;
}
