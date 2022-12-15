const w = window


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer


w.demo1 = () => {
  // ArrayBuffer 对固定长度的连续内存空间的引用。 是核心对象是原始的二进制数据。
  // 0000_0000
  let buffer = new ArrayBuffer(16); // 创建一个长度为 16 Byte 的 buffer

  console.log('byteLength ', buffer.byteLength) // 16
  console.log('buffer', buffer) // 16



  // ==============================================
  // 如果我们要写入值或遍历它，基本上几乎所有操作 —— 我们必须使用视图（view)
  // 视图对象本身并不存储任何东西 透过它来解释存储在 ArrayBuffer 中的字节
  let view = new Uint32Array(buffer); // 将 buffer 视为一个 32 位整数的序列

  console.log('BYTES_PER_ELEMENT', Uint32Array.BYTES_PER_ELEMENT); // 每个整数 4 个字节

  console.log(view)
  console.log('view.length', view.length); // 4，它存储了 4 个整数
  console.log('byteLength', view.byteLength); // 16，字节中的大小

  // 让我们写入一个值
  view[0] = 123456;

  // 遍历值
  for (let num of view) {
    console.log(num); // 123456，然后 0，0，0（一共 4 个值）
  }
}


// 越界
w.typedArrayOutOfBounds = () => {

  let uint8array = new Uint8Array(16);
  let num =  0b1_0000_0000; // 256
  let num2 = 0b1_0000_0001; // 257

  uint8array[0] = num;
  uint8array[1] = num2;
  console.log('uint8array[0]', uint8array[0]); // 0
  console.log('uint8array[1]', uint8array[1]); // 1


  // 在这方面比较特殊，它的表现不太一样。对于大于 255 的任何数字，它将保存为 255，对于任何负数，它将保存为 0。此行为对于图像处理很有用。
  let uint8ClampedArr = new Uint8ClampedArray(16);

  uint8ClampedArr[0] = num;
  uint8ClampedArr[1] = num2;
  console.log('uint8ClampedArr[0]', uint8ClampedArr[0]); // 255
  console.log('uint8ClampedArr[1]', uint8ClampedArr[1], uint8ClampedArr[1].toString('2')); // 255 --> 0b1111_1111
}



w.demoDataView = () => {
  // 4 个字节的二进制数组，每个都是最大值 255
  let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

  let dataView = new DataView(buffer);

  // 在偏移量为 0 处获取 8 位数字
  console.log(dataView.getUint8(0)); // 255

  // 现在在偏移量为 0 处获取 16 位数字，它由 2 个字节组成，一起解析为 65535
  // 0000000_000001  --> 
  console.log(dataView.getUint16(0)); // 65535（最大的 16 位无符号整数）

  // 在偏移量为 0 处获取 32 位数字
  console.log(dataView.getUint32(0)); // 4294967295（最大的 32 位无符号整数）

  dataView.setUint32(0, 0); // 将 4 个字节的数字设为 0，即将所有字节都设为 0
}