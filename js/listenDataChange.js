let obj = {
    key_1:1,
    key_2: 2
}

function func(key){
    console.log(key, '  的值发生改变',this[key])
}


function bindData(obj, fn){
    for( let key in obj){
        Object.defineProperty(obj, key, {
            set(newVal){
                if(this.value !==newVal){
                    this.value = newVal
                    fn.call(obj, key)
                }
            },
            get(){
                return this.value
            }
        })
    }
}

bindData(obj, func)

obj['key_1']='3423423'
