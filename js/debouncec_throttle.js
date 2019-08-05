// debounce
function debounce(func, delay){
    var timeout
    return function(){
        clearTimeout(timeout)
        var context = this, args = [].slice.call(arguments)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, delay)
    }
}

const delay = (ms)=> new Promise(res=>setTimeout(res,ms))


// throttle
function throttle(fn, threshold = 160){
    var timeout
    var start = new Date;
    return function(){
        const context = this;
        const args = [].slice.call(arguments)
        const curr = new Date() - 0;
        clearTimeout(timeout)

        if(curr - start >= threshold){
            fn.apply(context, args)
            start = curr
        }else{
            timeout = setTimeout(function(){
                fn.apply(context, args)
            }, threshold)
        }
    }
}

