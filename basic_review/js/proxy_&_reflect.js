{
  let target = { test: 2 };
  let proxy = new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        return 0; // 默认值
      }
    },
  }); // 空的 handler 对象

  //   由于没有捕捉器，所有对 proxy 的操作都直接转发给了 target。
  //   写入操作 proxy.test= 会将值写入 target。
  //   读取操作 proxy.test 会从 target 返回对应的值。
  //   迭代 proxy 会从 target 返回对应的值。
  proxy.test = 5; // 写入 proxy 对象 (1)
  console.log(target.test); // 5，test 属性出现在了 target 中！

  console.log(proxy.test); // 5，我们也可以从 proxy 对象读取它 (2)

  for (let key in proxy) console.log(key); // test，迭代也正常工作 (3)
}

/**
[[Get]]	get	读取属性
[[Set]]	set	写入属性
[[HasProperty]]	has	in 操作符
[[Delete]]	deleteProperty	delete 操作符
[[Call]]	apply	函数调用
[[Construct]]	construct	new 操作符
[[GetPrototypeOf]]	getPrototypeOf	Object.getPrototypeOf
[[SetPrototypeOf]]	setPrototypeOf	Object.setPrototypeOf
[[IsExtensible]]	isExtensible	Object.isExtensible
[[PreventExtensions]]	preventExtensions	Object.preventExtensions
[[DefineOwnProperty]]	defineProperty	Object.defineProperty, Object.defineProperties
[[GetOwnProperty]]	getOwnPropertyDescriptor	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
[[OwnPropertyKeys]]	ownKeys	Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object/keys/values/entries
***/

{
  /**
   * 限制set时的类型
   */
  let numbers = [];

  numbers = new Proxy(numbers, {
    // (*)
    set(target, prop, val) {
      // 拦截写入属性操作
      if (typeof val == "number") {
        target[prop] = val;
        return true;
      } else {
        return false;
      }
    },
  });

  numbers.push(1); // 添加成功
  numbers.push(2); // 添加成功
  console.log("Length is: " + numbers.length); // 2

  numbers.push("test"); // TypeError（proxy 的 'set' 返回 false）

  console.log("This line is never reached (error in the line above)");
}

{
  // 做一个私有属性
  let user = {
    name: "John",
    _password: "***",
  };

  user = new Proxy(user, {
    get(target, prop) {
      if (prop.startsWith("_")) {
        throw new Error("Access denied");
      }
      let value = target[prop];
      return typeof value === "function" ? value.bind(target) : value; // (*)
    },
    set(target, prop, val) {
      // 拦截属性写入
      if (prop.startsWith("_")) {
        throw new Error("Access denied");
      } else {
        target[prop] = val;
        return true;
      }
    },
    deleteProperty(target, prop) {
      // 拦截属性删除
      if (prop.startsWith("_")) {
        throw new Error("Access denied");
      } else {
        delete target[prop];
        return true;
      }
    },
    ownKeys(target) {
      // 拦截读取属性列表
      // 注意bind
      //   对 user.checkPassword() 的调用会将被代理的对象 user 作为 this（点符号之前的对象会成为 this），因此，当它尝试访问 this._password 时，get 捕捉器将激活（在任何属性读取时，它都会被触发）并抛出错误。
      // 因此，我们在 (*) 行中将对象方法的上下文绑定到原始对象 target。然后，它们将来的调用将使用 target 作为 this，不会触发任何捕捉器
      return Object.keys(target).filter((key) => !key.startsWith("_"));
    },
  });

  // "get" 不允许读取 _password
  try {
    alert(user._password); // Error: Access denied
  } catch (e) {
    alert(e.message);
  }

  // "set" 不允许写入 _password
  try {
    user._password = "test"; // Error: Access denied
  } catch (e) {
    alert(e.message);
  }

  // "deleteProperty" 不允许删除 _password
  try {
    delete user._password; // Error: Access denied
  } catch (e) {
    alert(e.message);
  }

  // "ownKeys" 将 _password 过滤出去
  for (let key in user) alert(key); // name
}
