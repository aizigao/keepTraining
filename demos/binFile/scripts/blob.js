const testIframe = document.querySelector('#test-iframe')


/**
 * new Blob(blobParts, options);
 * blobParts 是 Blob/BufferSource/String 类型的值的数组。
 * options
 *  type: MIME
 *  endings: transparent | native 是否转换换行符
 */


window.blob1 = () => {
  // 从字符串创建 Blob
  let blob = new Blob(["<html><body>xxxxxxxx</body></html>"], { type: 'text/html' });
  // 请注意：第一个参数必须是一个数组 [...]
  console.log(blob)

  // blog 转成 URL
  const url = URL.createObjectURL(blob)
  // 可用于处理iframe 加载失败问题
  // 当iframe 加载失败时
  testIframe.src = url
}



// 取读文件
window.blob2 = () => {
  fetch('/files/rootCA.crt').then(res =>
    res.blob()
  ).then(blob => {
    console.log(blob)
    blob.arrayBuffer().then(ab => {
      const view = new Uint8Array(ab)
      console.log(view)
      // const fr = new FileReader()

    })
  })

}


// blob 取 imageData
window.blob3 = () => {
  fetch('/files/y.jpg').then(res =>
    res.blob()
  ).then(blob => {
    console.log('y.jpg', blob)
    // 转成 typedArray
    blob.arrayBuffer().then(ab => {
      const view = new Uint8ClampedArray(ab)
      console.log('Uint8ClampedArray', view)
    })

    // 转成 base64
    let reader = new FileReader();
    reader.readAsDataURL(blob); // 将 Blob 转换为 base64 并调用 onload

    reader.onload = function () {
      const dataUrl = reader.result; // data url
      console.log('base64', dataUrl)
    };
  })
}

window.blob4 = () => {
  // 获取任何图像
  let img = new Image()
  img.onload = () => {
    // 生成同尺寸的 <canvas>
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    let context = canvas.getContext('2d');

    // 向其中复制图像（此方法允许剪裁图像）
    context.drawImage(img, 0, 0);
    // 我们 context.rotate()，并在 canvas 上做很多其他事情

    // toBlob 是异步操作，结束后会调用 callback
    canvas.toBlob(function (blob) {
      // blob 创建完成，下载它
      let link = document.createElement('a');
      link.download = 'example.png';

      link.href = URL.createObjectURL(blob);
      link.click();

      // 删除内部 blob 引用，这样浏览器可以从内存中将其清除
      URL.revokeObjectURL(link.href);
    }, 'image/png');

  }
  img.src = '/files/y.jpg'
}


// 分享api
window.blob5 = async () => {

  if (navigator.canShare) {
    return
  }
  const response = await fetch('/binFile/files/y.jpg');
  const blob = await response.blob();
  const file = new File([blob], 'testShare.jpg');
  const shareData = {
    files: [file],
  }
  navigator.share(
    shareData
  )
}