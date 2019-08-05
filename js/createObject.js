// 1. 工厂模式

function createPerson(name){
    var o = new Object()
    o.name = name
    o.getName = function(){
        console.log(this.name)
    }
    return o
}

var person1 = createPerson('kevin')

// 缺点：对象无法识别，因为所有的实例都指向一个原型
//




// 构造函数模式

function Person(name){
    this.name = name
    get.getName = function(){
        console.log(this.name)
    }
}

var person2 = new Person('kevin')

// 优点：实例可以识别为一个特定的类型

// 缺点：每次创建实例时，每个方法都要被创建一次


// 构造函数模式优化
//
function Person(name) {
    this.name = name;
    this.getName = getName;
}

function getName() {
    console.log(this.name);
}

var person3 = new Person('kevin');

// 优点：解决了每个方法都要被重新创建的问题
// 缺点：这叫啥封装……


//原型模式

function Person(name) {

}

Person.prototype.name = 'keivn';
Person.prototype.getName = function () {
    console.log(this.name);
};

var person4 = new Person();

// 优点：方法不会重新创建
//
// 缺点：1. 所有的属性和方法都共享 2. 不能初始化参数



// 组合模式 *
function Person(name){
    this.name= name
}

Person.prototype = {
    constructor: Person,
    getName: function(){
        console.log(this.name)
    }
}
// 点：该共享的共享，该私有的私有，使用最广泛的方式
//
// 缺点：有的人就是希望全部都写在一起，即更好的封装性




// 动态原型
function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype.getName = function () {
            console.log(this.name);
        }
    }
}
// 使用动态原型时 不能用对象字面量写原型

var person1 = new Person();


 // 寄生构造函数模式
function Person(name) {

    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };

    return o;

}

var person1 = new Person('kevin');
console.log(person1 instanceof Person) // false
console.log(person1 instanceof Object)  // true


// 稳妥构造函数模式
function person(name){
    var o = new Object();
    o.sayName = function(){
        console.log(name);
    };
    return o;
}

var person1 = person('kevin');

person1.sayName(); // kevin

person1.name = "daisy";

person1.sayName(); // kevin

console.log(person1.name); // daisy

// 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。
//
// 与寄生构造函数模式有两点不同：
//
// 新创建的实例方法不引用 this
// 不使用 new 操作符调用构造函数
// 稳妥对象最适合在一些安全的环境中。
//
// 稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。
