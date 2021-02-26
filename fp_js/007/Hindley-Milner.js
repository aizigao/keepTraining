/**
 * 在 Hindley-Milner 系统中，函数都写成类似 a -> b 这个样子，其中 a 和b 是任意类型的变量
 */
{
  //  capitalize :: String -> String
  var capitalize = function (s) {
    return toUpperCase(head(s)) + toLowerCase(tail(s));
  };

  capitalize("smurf");
  //=> "Smurf"
}

{
  //  strLength :: String -> Number
  var strLength = function (s) {
    return s.length;
  };

  //  join :: String -> [String] -> String
  var join = curry(function (what, xs) {
    return xs.join(what);
  });

  //  match :: Regex -> String -> [String]
  var match = curry(function (reg, s) {
    return s.match(reg);
  });

  //  replace :: Regex -> String -> String -> String
  var replace = curry(function (reg, sub, s) {
    return s.replace(reg, sub);
  });
}

{
  //  match :: Regex -> (String -> [String])
  var match = curry(function (reg, s) {
    return s.match(reg);
  });
  //  onHoliday :: String -> [String]
  var onHoliday = match(/holiday/gi);
}

{
  //  id :: a -> a
  var id = function (x) {
    return x;
  };

  //  map :: (a -> b) -> [a] -> [b]
  var map = curry(function (f, xs) {
    return xs.map(f);
  });
}

// reduce 可能是以上签名里让人印象最为深刻的一个，同时也是最复杂的一个了，所以如果你理解起来有困难的话，也不必气馁。为了满足你的好奇心，我还是试着解释一下吧；尽管我的解释远远不如你自己通过类型签名理解其含义来得有教益。
{
  //  head :: [a] -> a
  var head = function (xs) {
    return xs[0];
  };

  //  filter :: (a -> Bool) -> [a] -> [a]
  var filter = curry(function (f, xs) {
    return xs.filter(f);
  });

  //  reduce :: (b -> a -> b) -> b -> [a] -> b
  var reduce = curry(function (f, x, xs) {
    return xs.reduce(f, x);
  });

  // reduce:: (b->a->b) -> b -> [a] ->b
  var reduce = curry((f, x, xs) => {
    return xs.reduce(f, x);
  });

  //   可以看到它的
  //   第一个参数是个函数，这个函数接受一个 b 和一个 a 并返回一个 b。那么这些 a 和 b 是从哪来的呢？
  //  很简单，签名中的第二个和第三个参数就是 b 和元素为 a 的数组，
  //  所以唯一合理的假设就是这里的 b 和每一个 a 都将传给前面说的函数作为参数。
  // 我们还可以看到，reduce 函数最后返回的结果是一个 b，也就是说，reduce 的第一个参数函数的输出就是 reduce 函数的输出。知道了 reduce 的含义，我们才敢说上面关于类型签名的推理是正确的
}

// -- 缩小可能性范围 parametricity
// 个特性表明，函数将会以一种统一的行为作用于所有的类型。我们来研究下：

//head :: [a] -> a

/**
 * 
注意看 head，可以看到它接受 [a] 返回 a。我们除了知道参数是个数组，其他的一概不知；所以函数的功能就只限于操作这个数组上。在它对 a 一无所知的情况下，它可能对 a 做什么操作呢？换句话说，a 告诉我们它不是一个特定的类型，这意味着它可以是任意类型；那么我们的函数对每一个可能的类型的操作都必须保持统一。这就是 parametricity 的含义。要让我们来猜测 head 的实现的话，唯一合理的推断就是它返回数组的第一个，或者最后一个，或者某个随机的元素；当然，head 这个命名应该能给我们一些线索。
 */

// reverse :: [a] -> [a]

// -- 自由定理

{
  // 不用写一行代码你也能理解这些定理，它们直接来自于类型本身。第一个例子中，等式左边说的是，先获取数组的头部（译者注：即第一个元素），然后对它调用函数 f；等式右边说的是，先对数组中的每一个元素调用 f，然后再取其返回结果的头部。这两个表达式的作用是相等的，但是前者要快得多。
  // head :: [a] -> a
  compose(f, head) == compose(head, map(f));

  // filter :: (a -> Bool) -> [a] -> [a]
  compose(map(f), filter(compose(p, f))) == compose(filter(p), map(f));
}



// -- 类型约束 


// a 一定是个 Ord 对象。
// sort :: Ord a => [a] -> [a]