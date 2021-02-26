// 将其成员对象的实列化推迟到子类中，子类可以重写父类接口方法以便创建的时候指定自己的对象类型。

// 抽象类
class BicycleShop {
  sellBicycle(model) {
    var bicycle = this.createBicycle(model);
    // 执行业务逻辑
    bicycle.A();
    bicycle.B();
    return bicycle;
  }
  createBicycle(model) {
    throw new Error("need overide this fn in subTypeClass");
  }
}

/**
上面是定义一个自行车抽象类来编写工厂模式的实列，定义了createBicycle这个方法，但是如果直接实例化父类，调用父类中的这个createBicycle方法,会抛出一个error，因为父类是一个抽象类，他不能被实列化，只能通过子类来实现这个方法，实现自己的业务逻辑，下面我们来定义子类，我们学会如何使用工厂模式重新编写这个方法，首先我们需要继承父类中的成员，然后编写子类;如下代码：
***/

class BicycleChild extends BicycleShop {
  constructor(name) {
    super(name);
  }
  createBicycle(model) {
    var A = function() {
      console.log("run A");
    };
    var B = function() {
      console.log("run B");
    };
    return {
      A,
      B
    };
  }
}

var child = new BicycleChild("dfsdfs");
console.log(child.sellBicycle("xxx"));
