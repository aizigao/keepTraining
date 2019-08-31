// -- 操作二进制数据

// 构造方式

// 1. new Buffer(size)

// 已废弃
const bf = new Buffer(5);

bf[1] = '2';

// 分配大小后，长度是固定的，不能更改
console.log(bf);

{
  const bf2 = new Buffer([1, 2, 3]);
  bf2[10] = 43; // 无效
  console.log(bf2);
}

{
  // codeding
  const bf = new Buffer('dfsfsdf', 'utf-8');
  console.log(bf);

  for (let i = 0; i < bf.length; i++) {
    console.log(bf[i]); // 二进制
    console.log(bf[i].toString(16)); // 16进制
    console.log(String.fromCharCode(bf[i]));
  }
}

// 字节长度
{
  const str = '长度'; // 一个占3字节
  console.log(str.length); // 2
  console.log(new Buffer(str).length); // 6
}
