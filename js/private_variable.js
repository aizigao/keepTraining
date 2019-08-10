const prefixLog = prefix => (...args) => {
  console.log(prefix, ...args);
};

// 约定

(() => {
  const log = prefixLog("约定式");
  /**
   * adventage
   * 写法简单
   * 调试方便
   * 兼容性好
   *
   * disadventage
   * 外部可以访问
   * for in 可以枚举出来
   * 命名冲突
   */
  class Example {
    constructor() {
      this._private = "private";
    }
    getName() {
      return this._private;
    }
  }

  const ex = new Example();
  log(ex.getName()); // private
  log(ex._private); // private;
})();

// ---------- 闭包 -------
(() => {
  /************************
   * adventage
   * - 无命名冲突
   * - 外部无法访问 // 主要的效果
   *
   * disadventage
   * - constructor 变得复杂
   * - 方法用于实例，而非原型,子类不能super调用
   * - 构建增加一点点开销
   * ******************/
  const log = prefixLog("闭包1");
  class Example {
    constructor() {
      var _private = "";
      _private = "private";
      this.getName = function() {
        return _private;
      };
    }
  }
  const ex = new Example();
  log(ex.getName()); // private
  log(ex._private); // undefined
})();

(() => {
  /**
   * disadventage
   * - 写法有一点复杂
   * - 构建增加一点点开销
   */
  const log = prefixLog("闭包2");

  const Example = (function() {
    let _private = "";
    return class Example {
      constructor() {
        _private = "private";
      }
      getName() {
        return _private;
      }
    };
  })();
  const ex = new Example();
  log(ex.getName()); // private
  log(ex._private); // undefined
})();

// ----------- Symlbol -----

(() => {
  /**
   * adventage
   * - 无命名冲突
   * - 外部无法访问
   * - 无性能损失
   * disadventage
   * - 写法有一点复杂
   * - 兼容性也还好
   */
  const log = prefixLog("Symbol");

  const Example = (function() {
    let _private = Symbol("private");
    return class Example {
      constructor() {
        this[_private] = "private";
      }
      getName() {
        return this[_private];
      }
    };
  })();
  const ex = new Example();
  log(ex.getName()); // private
  log(ex._private); // undefined
})();

(() => {
  /**
   * adventage
   * - 无命名冲突
   * - 外部无法访问
   * disadventage
   * - 写法有一点复杂
   * - 兼容性也还好
   * - 有一定性能代价
   */
  const log = prefixLog("WeakMap");

  const Example = (function() {
    const _private = new WeakMap();
    return class Example {
      constructor() {
        _private.set(this, "private");
      }
      getName() {
        return _private.get(this);
      }
    };
  })();
  const ex = new Example();
  log(ex.getName()); // private
  log(ex._private); // undefined
})();

//----------- g最新提案 -------------
//
/******************
class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  equals(point) {
    return this.#x === point.#x && this.#y === point.#y;
  }
}
 *********************/
