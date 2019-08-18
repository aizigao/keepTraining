// a = a + (b - a) --> a = b
function swap(a,b){
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}

console.log(swap(1,2))
