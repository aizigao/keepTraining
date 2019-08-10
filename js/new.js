/***********************
1. create a new Object
2. first argument is Constructor
3. create prototype link use __proto__ to Constructor.prototype
4. use apply to bind this and run it
************************/

function objectFactory() {
  const obj = {};
  const Constructor = [].shift.call(arguments);
  obj.__proto__ =
    typeof Constructor === "number" ? Object.prototype : Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

function A(name, age) {
  [this.name, this.age] = [name, age];
}

A.prototype.getInfo = function() {
  console.log(this.name, this.age);
};

var a = objectFactory(A, "Alex", 18);

a.getInfo();
