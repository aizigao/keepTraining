function CreatePerson(name, age, sex) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.sayName = function() {
    return this.name;
  };
  return obj;
}

var p1 = new CreatePerson("longen", "28", "男");
var p2 = new CreatePerson("tugenhua", "27", "女");
console.log(p1.name); // longen
console.log(p1.age); // 28
console.log(p1.sex); // 男
console.log(p1.sayName()); // longen

console.log(p2.name); // tugenhua
console.log(p2.age); // 27
console.log(p2.sex); // 女
console.log(p2.sayName()); // tugenhua

// 返回都是object 无法识别对象的类型 不知道他们是哪个对象的实列
console.log(typeof p1); // object
console.log(typeof p2); // object
console.log(p1 instanceof Object); // true
