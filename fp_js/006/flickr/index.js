requirejs.config({
  paths: {
    ramda: "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min",
    jquery: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
  },
});

require(["ramda", "jquery"], function (_, $) {
  var trace = _.curry(function (tag, x) {
    console.log(tag, x);
    return x;
  });

  // ---  app goes here ---
  // 1. 根据特定搜索关键字构造 url
  // 2. 向 flickr 发送 api 请求 --不纯的动作
  // 3. 把返回的 json 转为 html 图片
  // 4. 把图片放到屏幕上 -- 不纯的动作

  var Impure = {
    getJSON: _.curry(function (callback, url) {
      $.getJSON(url, callback);
    }),

    setHtml: _.curry(function (sel, html) {
      $(sel).html(html);
    }),
  };

  //   借助 monoid 或 combinator （后面会讲到这些概念），我们可以使用一些奇技淫巧来让 url 函数变为 pointfree 函数。
  var url = function (term) {
    return (
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=" +
      term +
      "&format=json&jsoncallback=?"
    );
  };

  var app = _.compose(
    Imgure,
    setHtml("body"),
    Imgure.getJSON(trace("response")),
    url
  );
  app("cats");
});
