const fs = require('fs');

const fileDir = './testProj/source';

fs.watch(fileDir, (ev, file) => {
  // console.log(ev); console.log(file); //file删除时，不触发事件 有文件变化就读取全部文件

  fs.readdir(fileDir, (err, dataList) => {
    if (err) {
      return;
    }
    const arr = [];
    dataList.forEach((f) => {
      const info = fs.statSync(`${fileDir}/${f}`);
      arr.push(`${fileDir}/${f}`);
    });
    let content = '';

    arr.forEach((f) => {
      const c = fs.readFileSync(f);
      content += `${c.toString()}\n`;
    });
    // 再说
    console.log('ok');
    console.log(content);
  });
});
