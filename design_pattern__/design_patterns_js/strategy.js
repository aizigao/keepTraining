// 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
//
/**********************************************
1. 策略模式利用组合，委托等技术和思想，有效的避免很多if条件语句。
2. 策略模式提供了开放-封闭原则，使代码更容易理解和扩展。
3. 策略模式中的代码可以复用。
4. 将不变的部分和变化的部分隔开
***********************************************/
{
  // 计算奖金
  var calculateBouns = function (salary, level) {
    if (level === "A") {
      return salary * 4;
    }
    if (level === "B") {
      return salary * 3;
    }
    if (level === "C") {
      return salary * 2;
    }
  };
  console.log(calculateBouns(4000, "A"));
  console.log(calculateBouns(4000, "B"));
  console.log(calculateBouns(2500, "C"));
  // calculateBouns 函数包含了很多if-else语句。
  // calculateBouns 函数缺乏弹性，假如还有D等级的话，那么我们需要在calculateBouns 函数内添加判断等级D的if语句；
  // 算法复用性差，如果在其他的地方也有类似这样的算法的话，但是规则不一样，我们这些代码不能通用。
}

{
  var performanceA = function () {};
  performanceA.prototype.calculate = function (salary) {
    return salary * 4;
  };
  var performanceB = function () {};
  performanceB.prototype.calculate = function (salary) {
    return salary * 3;
  };
  var performanceC = function () {};
  performanceC.prototype.calculate = function (salary) {
    return salary * 2;
  };

  // 奖金类
  var Bouns = function () {
    this.salary = null; // 原始工资
    this.levelObj = null; // 绩效等级对应的策略对象
  };
  Bouns.prototype.setSalary = function (salary) {
    this.salary = salary; // 保存员工的原始工资
  };
  Bouns.prototype.setlevelObj = function (levelObj) {
    this.levelObj = levelObj; // 设置员工绩效等级对应的策略对象
  };
  // 取得奖金数
  Bouns.prototype.getBouns = function () {
    // 把计算奖金的操作委托给对应的策略对象
    return this.levelObj.calculate(this.salary);
  };
  var bouns = new Bouns();
  bouns.setSalary(10000);
  bouns.setlevelObj(new performanceA()); // 设置策略对象
  console.log(bouns.getBouns()); // 40000

  bouns.setlevelObj(new performanceB()); // 设置策略对象
  console.log(bouns.getBouns()); // 30000
}

var a = () => {};
(() => {
  //代码如下：
  var obj = {
    A: function (salary) {
      return salary * 4;
    },
    B: function (salary) {
      return salary * 3;
    },
    C: function (salary) {
      return salary * 2;
    },
  };
  var calculateBouns = function (level, salary) {
    return obj[level](salary);
  };
  console.log(calculateBouns("A", 10000)); // 40000
})();
var a = () => {};

(() => {
  "use strict";
  let data = new Map([
    ["first_name", "Super"],
    ["last_name", "Man"],
    ["age", "unknown"],
    ["username", "o_O"],
  ]);
  let config = new Map([
    ["first_name", "isNonEmpty"],
    ["age", "isNumber"],
    ["username", "isAlphaNum"],
  ]);

  class Checker {
    constructor(check, instructions) {
      [this.check, this.instructions] = [check, instructions];
    }
  }

  class Validator {
    constructor(config) {
      [this.config, this.messages] = [config, []];
    }

    validate(data) {
      for (let [k, v] of data.entries()) {
        let type = this.config.get(k);
        let checker = Validator[type];
        if (!type) continue;
        if (!checker) throw new Error(`No handler to validate type ${type}`);
        let result = checker.check(v);
        if (!result) this.messages.push(checker.instructions + ` **${v}**`);
      }
    }

    hasError() {
      return this.messages.length !== 0;
    }
  }

  Validator.isNumber = new Checker(
    (val) => !isNaN(val),
    "the value can only be a valid number"
  );
  Validator.isNonEmpty = new Checker(
    (val) => val !== "",
    "the value can not be empty"
  );
  Validator.isAlphaNum = new Checker(
    (val) => !/^a-z0-9/i.test(val),
    "the value can not have special symbols"
  );

  let validator = new Validator(config);
  validator.validate(data);
  console.log(validator.messages.join("\n")); //the value can only be a valid number **unknown**
})();
