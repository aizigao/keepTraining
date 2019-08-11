var a = [1,2,3];


// instanceof **
;(()=>{
    console.log(a instanceof Array) // true
})();


//constructor *
;(()=>{
    console.log(
        a.constructor // [Function: Array] node
        // ƒ Array() { [native code] } browser
    )
})()


// Object.prototyp.toString.call ****
;(()=>{
    console.log(
        Object.prototype.toString.call(a) // [object Array]
    )
})()


// Array.isArray
// 兼容问题
;(()=>{
    console.log(
        Array.isArray(a) // true
    )
})()
