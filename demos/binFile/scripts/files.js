/**
 * 
 * 
 * new File(fileParts, fileName, [options])
 * 
    fileParts —— Blob/BufferSource/String 类型值的数组。
    fileName —— 文件名字符串。
    options —— 可选对象：
    lastModified —— 最后一次修改的时间戳（整数日期）。
 * 
 */




const $file = document.querySelector('#file')

$file.addEventListener('change', function () {
  const files = this.files
  console.log(files)
})


window.file1 = () => {
  fetch('/files/y.jpg').then(res =>
    res.blob()
  ).then(blob => {
    console.log('y.jpg', blob)
    console.log('nweF', new File(blob, 'y.jpg'))
  })
}


/**
 * let reader = new FileReader(); // 没有参数
 * 
 * 
 * 主要方法:
  readAsArrayBuffer(blob) —— 将数据读取为二进制格式的 ArrayBuffer。
  readAsText(blob, [encoding]) —— 将数据读取为给定编码（默认为 utf-8 编码）的文本字符串。
  readAsDataURL(blob) —— 读取二进制数据，并将其编码为 base64 的 data url。
  abort() —— 取消操作。
 */



window.file2 = () => {
  fetch('/files/rootCA.crt').then(res =>
    res.blob()
  ).then(blob => {
    let reader = new FileReader();
    // reader.readAsArrayBuffer(blob) // 
    reader.readAsText(blob)
    // reader.readAsDataURL(blob)

    reader.onload = function () {
      console.log(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  })
}
