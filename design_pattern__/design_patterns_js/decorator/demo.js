// https://aotu.io/notes/2016/10/24/decorator/index.html

{
  class Cat {
    say() {
      console.log("meow ~");
    }
  }
  //   -->
  /** 等效于
   * @example
  function Cat() {}
    Object.defineProperty(Cat.prototype, "say", {
        value: function() { console.log("meow ~"); },
        enumerable: false,  //  --
        configurable: true, // -
        writable: true // --
    });
 */
}

// --- classs
//当装饰器作用于类本身的时候，我们操作的对象也是这个类本身 
{
  function isAnimal(target) {
    target.isAnimal = true;
    return target;
  }

  @isAnimal
  class Cat {}
  console.log(Cat.isAnimal); // true
}

// -- 类属性
// 作用于类的某个具体的属性的时候，我们操作的对象既不是类本身，也不是类的属性，而是它的描述符（descriptor）
{
  function readonly(target, name, descriptor) {
    discriptor.writable = false;
    return discriptor;
  }

  class Cat {
    @readonly
    say() {
      console.log("meow ~");
    }
  }

  var kitty = new Cat();

  kitty.say = function () {
    console.log("woof !");
  };

  kitty.say(); // meow ~
  /**
let descriptor = {
    value: function() {
        console.log("meow ~");
    },
    enumerable: false,
    configurable: true,
    writable: true
};

descriptor = readonly(Cat.prototype, "say", descriptor) || descriptor;

Object.defineProperty(Cat.prototype, "say", descriptor);
   */
}
