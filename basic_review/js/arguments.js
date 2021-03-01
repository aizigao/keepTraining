var array =['name', 'age', 'sex']

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3,
}


// 读写
console.log(array[0]) //name

console.log(arrayLike[0]) //name
array[0] = 'new name'
arrayLike[0] = 'new name'


// 长度
//
cosnole.log(array.length) //3
cosnole.log(arrayLike.length) //3

// 遍历
for(var i = 0, len = array.length; i < len; i++) {
   // ……
}
for(var i = 0, len = arrayLike.length; i < len; i++) {
    // ……
}



// 调用数组方法
//
Array.prototype.join.call(arrayLike, '&')
Array.prototype.slice.call(arrayLike, '&')
Array.prototype.map.call(arrayLike,(item)=>{
    return item.toUpperCase()
} )

// 转数组
//
Array.prototype.slice.call(arrayLike)
Array.prototype.splice.call(arrayLike,0)
Array.form(arrayLike)

Array.prototype.concat.apply([], arrayLike)



//arugment
//
// {
// 0: 'name',
// 1: 'age',
// 2: 'sex'
// callee: foo(name ,age, sex),
// length: 3
// Symbol(Symbol.iterator): values()
// __proto__:Object
//
// }
//
//
// 使用ES6的 ... 运算符，我们可以轻松转成数组。

function func(...arguments) {
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3);
