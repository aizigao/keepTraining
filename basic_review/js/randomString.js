console.log(
    String.fromCharCode(110)
)

function randomString(n){
    const str = '01234567879abcdefghijklmnopqrstuvwxyz'
    const strLen = str.length
    let result = ''
    for(let i =0; i< n; i++){
        const randomIndex = parseInt(Math.random() * strLen, 10)
        result += str[randomIndex]
    }
    return result
}

console.log(randomString(3))
console.log(randomString(13))
