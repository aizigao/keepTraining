{
  function delay(f, ms) {
    return new Proxy(f, {
      apply(target, thisArg, args) {
        setTimeout(() => target.apply(thisArg, args), ms);
      },
    });
  }

  function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }

  sayHi = delay(sayHi, 3000);

  console.log(sayHi.length); // 1 (*) proxy 将“获取 length”的操作转发给目标对象

  sayHi("John"); // Hello, John!（3 秒后）
}

// Reflect 是一个内建对象，可简化 Proxy 的创建。

{
  let user = {};

  Reflect.set(user, "name", "John");

  console.log(user.name); // John
}

// 让我们看一个示例，来说明为什么 Reflect.get 更好。此外，我们还将看到为什么 get/set 有第三个参数 receiver，而且我们之前从来没有使用过它

{
  let user = {
    _name: "Guest",
    get name() {
      return this._name;
    },
  };

  let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop];
    },
  });

  console.log(userProxy.name); // Guest
}
// 另一个对象 admin 从 user 继承后，我们可以观察到错误的行为：
{
  let user = {
    _name: "Guest",
    get name() {
      return this._name;
    },
  };

  let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop]; // (*) target = user
    },
  });

  let admin = {
    __proto__: userProxy,
    _name: "Admin",
  };

  // 期望输出：Admin
  console.log(admin.name); // 输出：Guest (?!?)

  //   当我们读取 admin.name 时，由于 admin 对象自身没有对应的的属性，搜索将转到其原型。

  // 原型是 userProxy。

  // 从代理读取 name 属性时，get 捕捉器会被触发，并从原始对象返回 target[prop] 属性，在 (*) 行。

  // 当调用 target[prop] 时，若 prop 是一个 getter，它将在 this=target 上下文中运行其代码。因此，结果是来自原始对G象 target 的 this._name，即来自 user。

  let userProxy2 = new Proxy(user, {
    get(target, prop, receiver) {
      // receiver = admin
      return Reflect.get(target, prop, receiver); // (*)
    },
  });

  let admin2 = {
    __proto__: userProxy2,
    _name: "Admin",
  };

  console.log(admin2.name); // Admin
}

// 建对象：内部插槽（Internal slot）

// 许多内建对象，例如 Map，Set，Date，Promise 等，都使用了所谓的“内部插槽”。

// 它们类似于属性，但仅限于内部使用，仅用于规范目的。例如，Map 将项目（item）存储在 [[MapData]] 中。内建方法可以直接访问它们，而不通过 [[Get]]/[[Set]] 内部方法。所以 Proxy 无法拦截它们。

try {
  let map = new Map();

  let proxy = new Proxy(map, {});

  proxy.set("test", 1); // Error 内部 this 值是 proxy
} catch (e) {
  console.error(e);
}

{
  let map = new Map();

  let proxy = new Proxy(map, {
    get(target, prop, receiver) {
      let value = Reflect.get(...arguments);
      return typeof value === "function" ? value.bind(target) : value;
    },
  });

  proxy.set("test", 1);
  console.log(proxy.get("test")); // 1（工作了！）
}

// 可撤销 Proxy

{
  let object = {
    data: "Valuable data",
  };

  let { proxy, revoke } = Proxy.revocable(object, {});

  // 将 proxy 传递到其他某处，而不是对象...
  console.log(proxy.data); // Valuable data

  // 稍后，在我们的代码中
  revoke();

  // proxy 不再工作（revoked）
  console.log(proxy.data); // Error
}

// 内建对象具有“内部插槽”，对这些对象的访问无法被代理。请参阅上文中的解决方法。
// 私有类字段也是如此，因为它们也是在内部使用插槽实现的。因此，代理方法的调用必须具有目标对象作为 this 才能访问它们。
// 对象的严格相等性检查 === 无法被拦截。
// 性能：基准测试（benchmark）取决于引擎，但通常使用最简单的代理访问属性所需的时间也要长几倍。实际上，这仅对某些“瓶颈”对象来说才重要。
