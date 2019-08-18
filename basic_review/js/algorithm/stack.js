// LIFO Last In First Out
// 定义栈
class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }
    length(){
        return this.count
    }

    push(item){
        this.items.push(item)
        this.count +=1
        return this.items
    }

    pop(){
        if(this.count >0){
            this.count -=1
        }
        return this.items.pop()
    }

    // 获取栈顶原素
    peek(){
        return this.items.slice(-1)[0]
    }

    //------------其它 -----------
    clear(){
        this.items = []
        this.count = 0
    }
}



// test

// 初始化一个栈
const stack = new Stack()

console.log(stack.peek()) // undefined


// 入栈
stack.push('Apple')
stack.push('Banana')
stack.push('Pear')

// 查看当前栈顶元素
console.log( stack.peek()) //Pear

// 取值 出栈
console.log(stack.pop()) // Pear


// getlength
console.log(stack.length()) //2

// clear
stack.clear()
console.log( stack.length() ) //0

//----------------- 案列 ------------------------
//进制转换（2-9）


/*
 * 数字n -> b为基数的数字
 * 1 最高位为 n % b ， 直接压入栈;
 * 2 使用 n / b 来代替 n ;
 * 3 重复上面的步骤，知道 n 为 0 ，并且没有余数；
 * 4 以此将栈内元素弹出，直到栈空，并依次将这些元素排列，就得到了转换后的形式
 */

function mulBase(num, base){
    var s = new Stack()
    var converted = ''
    do{
        s.push(num % base)
        num = Math.floor(num / base)
    }while(num>0)

        while(s.length()>0){
            converted += s.pop()
        }
    return converted
}

console.log( mulBase( 5, 2 ) );      // 1111101
console.log( mulBase( 125 , 2 ) );      // 1111101
console.log( mulBase( 125 , 8 ) );      // 175



// ---------- 判断字符串 回文 -------

function isPalindrome(word){
    var s = new Stack()

    for(var i = 0; i< word.length; i++){
        s.push(word[i])
    }

    var rword = ''
    while(s.length() >0){
        rword +=s.pop()
    }
    if(word === rword){
        return true
    }else{
        return false
    }

}

const isPalindrome2 = (str)=> str.split('').reverse().join('') === str

console.log( isPalindrome('level') )    // true
console.log( isPalindrome('1001') )     // true
console.log( isPalindrome('word') )     // false
console.log( isPalindrome2('word') )     // false
console.log( isPalindrome2('level') )    // true


