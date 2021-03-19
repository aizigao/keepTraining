const fs = require('fs');

// fs.open(path, flags, [mode], callback)
// flags 读写
// mode  chmod wrx 421

// fs.open("./test.txt", "r", (err, fd) => {
fs.open('./test.txt', 'r+', (err, fd) => {
  // fd 打开文件标识
  if (err) {
    console.log(err);
    console.log('文件打开失败');
    return;
  }
  const buffer = new Buffer(10);
  // fs.read(fd, buffer, 0, 4, 0, (err) => {
  //   console.log(buffer.toString());
  // });

  // 写入
  const buffer2 = new Buffer('来是是是测式');
  fs.write(fd, buffer2, 0, 3 * 5, 0, () => {});
  fs.close(fd, () => {});
});

{
  const filename = './2.txt';
  // 写入 / 覆盖
  fs.writeFile(filename, 'hello write', () => {
    console.log('xxxx');
  });
}

// fs.exists
//
//
//
//
// fs.watch()  监听
