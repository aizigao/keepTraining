const preloadImg = (url) => {
  const img = new Image();
  if (img.complete) {
    //图片已经加载过了，可以使用图片
    //do something here
  } else {
    // 最好是先定义onload，再赋值src，不然会出现资源返回，但是onload还没有挂载的情况
    img.onload = function () {
      //图片首次加载完成，可以使用图片
      //do something here
    };
  }
  img.src = url;
};

// 作者：代码星空
// 链接：https://juejin.cn/post/6844903760695656455
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
