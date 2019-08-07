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
