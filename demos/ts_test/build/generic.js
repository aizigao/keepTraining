"use strict";
function identity(arg) {
    return arg;
}
var output = identity(1);
// ----
function logginIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var myIdentity = function (s) {
    return s;
};
var myIdentity2 = identity;
// class
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
// 类类型
// -- 工厂
function create(c) {
    return new c();
}
