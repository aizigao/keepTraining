function finMaxDuplicateChar(str){
    if(str.length ===1){
        return str
    }

    let charObj ={}
    let maxChar = ''
    let maxValue = 1
    for(let i = 0, len = str.length; i < len; i++){
        if(charObj[str[i]]){
            charObj[str[i]] +=1
        }else{
            charObj[str[i]] =1
        }
    }

    for(var key in charObj){

        var curVal = charObj[key]
        if(curVal >= maxValue){
            maxChar = key
            maxValue = curVal
        }
    }

    return {maxChar, count: maxValue}
}

const test = '2312313474812374987sssssssssssssssss'

console.log(
    finMaxDuplicateChar(test)
)

