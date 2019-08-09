// TODO: 有点麻烦啊， 先不看
/******************************************************
有时候需要向某些对象发送请求，
但是并不知道请求的接收者是谁，
也不知道请求的操作是什么，
此时希望用一种松耦合的方式来设计程序代码;
使得请求发送者和请求接受者消除彼此代码中的耦合关系。
*******************************************************/
(() => {
  ```
<button id="button1">刷新菜单目录</button>
<button id="button2">增加子菜单</button>
<button id="button3">删除子菜单</button>
```;

  var b1 = document.getElementById("button1");
  var b2 = document.getElementById("button2");
  var b3 = document.getElementById("button3");

  // 定义setcommand函数，该函数负责住按钮上**安装命令**。点击按钮点会执行<command对象的execute

  var setCommand = function(button, command) {
    button.onclick = function() {
      command.execute();
    };
  };

  // 下面我们自已来定义各个对象完成自已的业务操作
  var MenuBar = {
    refresh: function() {
      console.log("刷新菜单目录");
    }
  };

  var SubMenu = {
    add: function() {
      console.log("增加子菜单");
    },
    del: function() {
      console.log("删除子菜单");
    }
  };

  // 下面是编写命今类
  var RefreshMenuBarCommand = function(receiver) {
    this.receiver = receiver;
  };

  RefreshMenuBarCommand.prototype.execute = function() {
    this.receiver.refersh();
  };
  // 增加命令操作
  var AddSubMenuCommand = function(receiver) {
    this.receiver = receiver;
  };
  AddSubMenuCommand.prototype.execute = function() {
    this.receiver.add();
  };
  // 删除命令操作
  var DelSubMenuCommand = function(receiver) {
    this.receiver = receiver;
  };
  DelSubMenuCommand.prototype.execute = function() {
    this.receiver.del();
  };
})();

// 最后把命令接收者传入到command对象中，并且把command对象安装到button上面
var refershBtn = new RefreshMenuBarCommand(MenuBar);
var addBtn = new AddSubMenuCommand(SubMenu);
var delBtn = new DelSubMenuCommand(SubMenu);

setCommand(b1, refershBtn);
setCommand(b2, addBtn);
setCommand(b3, delBtn);

/******************************************************************
从上面的命令类代码我们可以看到，
任何一个操作都有一个execute这个方法来执行操作;
上面的代码是使用传统的面向对象编程来实现命令模式的，
命令模式过程式的请求调用封装在command对象的execute方法里。
我们有没有发现上面的编写代码有点繁琐呢，
我们可以使用javascript中的回调函数来做这些事情的，
在面向对象中，命令模式的接收者被当成command对象的属性保存起来，
同时约定执行命令的操作调用command.execute方法，
但是如果我们使用回调函数的话，那么接收者被封闭在回调函数产生的环境中，
执行操作将会更加简单，仅仅执行回调函数即可，下面我们来看看代码如下：
********************************************************************/

(() => {
  // 如下代码上的四个按钮 点击事件
  var b1 = document.getElementById("button1"),
    b2 = document.getElementById("button2"),
    b3 = document.getElementById("button3"),
    b4 = document.getElementById("button4");
  /*
 bindEnv函数负责往按钮上面安装点击命令。点击按钮后，会调用
 函数
 */
  var bindEnv = function(button, func) {
    button.onclick = function() {
      func();
    };
  };
  // 现在我们来编写具体处理业务逻辑代码
  var Todo1 = {
    test1: function() {
      alert("我是来做第一个测试的");
    }
  };
  // 实现业务中的增删改操作
  var Menu = {
    add: function() {
      alert("我是来处理一些增加操作的");
    },
    del: function() {
      alert("我是来处理一些删除操作的");
    },
    update: function() {
      alert("我是来处理一些更新操作的");
    }
  };
  // 调用函数
  bindEnv(b1, Todo1.test1);
  // 增加按钮
  bindEnv(b2, Menu.add);
  // 删除按钮
  bindEnv(b3, Menu.del);
  // 更改按钮
  bindEnv(b4, Menu.update);
})();
