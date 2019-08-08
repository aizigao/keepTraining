/***********************
 * 代理是一个对象，
 * 用来控制对本体对象的访问，
 * 它与本体对象实现了同样的接口，
 * 代理对象把所有的调用方法传递给本体对象的；
 * 代理模式最基本的形式是对访问进行控制，
 * 而本体对象则负责执行所分派的那个对象的函数或者类，
 * 简单的来讲本地对象注重的去执行页面上的代码，代理则控制本地对象何时被实例化，何时被使用；我们在上面的单体模式中使用过一些代理模式，就是使用代理模式实现单体模式的实例化，其他的事情就交给本体对象去处理；
 ************************/

// 奶茶妹
class TeaAndMilkGirl {
  constructor(name) {
    this.name = name;
  }
}

// 京强东
class Ceo {
  constructor(girl) {
    this.girl = girl;
    // 送结婚礼物给奶妹
  }
  sendMarriageRing(ring) {
    console.log("HI," + this.girl.name + "ceo 送你一个" + ring);
  }
}

// 代理人, 代送
class ProxyObj {
  constructor(girl) {
    this.girl = girl;
  }
  sendGift(gift) {
    let ceo = new Ceo(this.girl);
    ceo.sendMarriageRing(gift);
  }
}

// init
var proxy = new ProxyObj(new TeaAndMilkGirl("奶茶妹"));

proxy.sendGift("ring!!");

// -------------------------- 实例 --------------------
// ---- 不使用代理预加载图片
(() => {
  // var myImage = (() => {
  //   var imgNode = document.createElement("img");
  //   document.body.appendChild(imgNode);
  //   var img = new Image();
  //   img.onload = function() {
  //     imgNode.src = this.src;
  //   };
  //   return {
  //     setSrc: src => {
  //       imgNode.src = "http://xxxxx.jpg";
  //       img.src = src;
  //     }
  //   };
  // })();
  // // 调用
  // myImage.setSrc("http://xxxxxyyy.jpg");
})();

// 代理模式
(() => {
  var myImage = (function() {
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return {
      setSrc: function(src) {
        imgNode.src = src;
      }
    };
  })();

  var ProxyImage = (function() {
    var img = new Image();
    img.onload = function() {
      myImage.setSrc(this.src);
    };
    return {
      setSrc(src) {
        myImage.setSrc("http://dfsdfs.jpg");
        img.src = src;
      }
    };
  })();

  ProxyObj.setSrc("http://dfsdfsd.jpg");
})();
/**************************************
第一种方案一般的方法代码的耦合性太高，一个函数内负责做了几件事情，比如创建img元素，和实现给未加载图片完成之前设置loading加载状态等多项事情，未满足面向对象设计原则中单一职责原则；并且当某个时候不需要代理的时候，需要从myImage 函数内把代码删掉，这样代码耦合性太高。
第二种方案使用代理模式，其中myImage 函数只负责做一件事，创建img元素加入到页面中，其中的加载loading图片交给代理函数ProxyImage 去做，当图片加载成功后，代理函数ProxyImage 会通知及执行myImage 函数的方法，同时当以后不需要代理对象的话，我们直接可以调用本体对象的方法即可；
**************************************/
