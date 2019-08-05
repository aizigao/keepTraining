// function foo(){
//     console.log(a)
//     a = 1
// }

// foo() // uncaught Reference: a is not defined

function bar(){
    a = 1
    console.log(a)
}

bar() // 1


console.log(foo)
