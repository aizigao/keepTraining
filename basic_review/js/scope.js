// https://github.com/mqyqingfeng/Blog/issues/3
// 词法作用域与动态作用域
var value =1

function foo(){
    console.log(value)
}


function bar(){
    var value = 2
    foo()
}

bar() // 1

/**
 * 假设为静态作用域 o
 * foo（）时内部查找局部变量value，没有向上一层打value， 得1
 * 假设为动态作用域 x
 * foo（）时内部查找局部变量value，没有就找调用函数作用域， 得2
 */
// 因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。


// ------ 
var scope = 'global scope';
function checkscope (){
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f()
}
console.log(checkscope())


// -------
var scope2 = 'global scope';

function checkscope2(){
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f
}

console.log(checkscope2()())
