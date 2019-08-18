// 工厂模式
// 对象无法识别， 因为所有实例指向一个原型
function createPerson(name){
    var o = new Object()
    o.name = name
    o.getName = function (){
        console.log(this.name)
    }
    return o
}

var person1 = createPerson('Kevin')
person1.getName()
