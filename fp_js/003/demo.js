// 函数仅仅只是输入到输出的映射而已，所以简单地写一个对象就能“运行”它，使用 [] 代替 () 即可。
{
  var toLowerCase = { A: "a", B: "b", C: "c", D: "d", E: "e", D: "d" };

  toLowerCase["C"];
  //=> "c"

  var isPrime = { 1: false, 2: true, 3: true, 4: false, 5: true, 6: false };

  isPrime[3];
  //=> true
}

