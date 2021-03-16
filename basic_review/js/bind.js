Function.prototype.myBind = function(obj){
    const fn = this

    if(typeof fn !== 'function'){
        return
    }
    const args = Array.prototype.slice(1)

    return function(){
        return fn.apply(obj, args.concat([].slice.call(arguments)))
    }
}

Function.prototype.myBind2 = function(obj){
    const fn = this
    if(typeof this !== 'function'){
        return
    }
    const args = [].slice.call(arguments, 1)

    return function(){
        return fn.apply(obj, args.concat(
            [].slice.call(arguments)
        ))
    }
}

const t = {
    a: 23,
    bar() {
        console.log(this.a)
    }
}

const xxx = {a:'xxx'}
const a = 333
const tt = t.bar.myBind(xxx)
// t.bar()
tt()
