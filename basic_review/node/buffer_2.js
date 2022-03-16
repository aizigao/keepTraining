// buf.write()

{
  const str = 'ghjkl';
  const bf = new Buffer(5);

  bf.write(str);
  console.log(bf);
}

{
  const str = 'ghjkl';
  const bf = new Buffer(5);

  // offset
  bf.write(str, 1);
  console.log(bf);
}

{
  const str = 'ghjkl';
  const bf = new Buffer(5);

  // offset length
  bf.write(str, 1, 3);
  console.log(bf);
}

// toString default utf-8
{
  const bf = new Buffer('hjklz');
  console.log(bf.toString()); // hjklz
  console.log(bf.toString('utf-8', 1)); // jklz
  console.log(bf.toString('utf-8', 1, 2)); // j
}

{
  const bf = new Buffer('好的');
  console.log(bf.toString('utf-8', 1)); // 乱了
}

// toJSON
{
  const bf = new Buffer('好的');
  console.log(bf.toJSON()); // {type:xxx,data:[xx]}
}

// slice copy
{
  const bf = new Buffer('hjklz');
  console.log(bf);
  // 和老的数据使用相同的内存地址
  console.log(bf.slice()); // hjklz
  // 复制要用copy方法
  const bf4 = new Buffer(10);
  bf.copy(bf4);
  console.log(bf4);
}
