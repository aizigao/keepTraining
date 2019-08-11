// Math.random
// https://github.com/mqyqingfeng/Blog/issues/51


(()=>{
    let values = [1,2,3,4,5,6,7,8,9,10,11]
    // Math.random() - 0.5 随机得到一个正数、负数或是 0
    values.sort(()=>{
        // Math.random() - 0.5 随机得到一个正数、负数或是 0，如果是正数则降序排列，如果是负数则升序排列，如果是 0 就不变，然后不断的升序或者降序，最终得到一个乱序的数组。
        return Math.random() - 0.5
    })
    console.log(values)
})();


// 测试
// 将 [1, 2, 3, 4, 5] 乱序 10 万次，计算乱序后的数组的最后一个元素是 1、2、3、4、5 的次数分别是多少
(()=>{
    var times = [0, 0, 0, 0, 0];
    var arr =   [1, 2, 3, 4, 5]
    for (var i = 0; i < 100000; i++) {
        arr.sort(() => Math.random() - 0.5);
        times[arr[4]-1]++;
    }
    console.log(times) // 不够平均 最后一个元素为 5 的次数远远低于为 1 的次数，所以这个方案是有问题的。
})();

// 我们以 v8 为例，v8 在处理 sort 方法时，当目标数组长度小于 10 时，使用插入排序；反之，使用快速排序和插入排序的混合排序。



// -- Fisher–Yates ---
// 由 Ronald Fisher 和 Frank Yates 首次提出的
// 就是遍历数组元素，然后将当前元素与以后随机位置的元素进行交换，从代码中也可以看出，这样乱序的就会更加彻底。
(()=>{

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}



var times = 100000;
var res = {};

for (var i = 0; i < times; i++) {
    var arr = shuffle([1, 2, 3]);

    var key = JSON.stringify(arr);
    res[key] ? res[key]++ :  res[key] = 1;
}

// 为了方便展示，转换成百分比
for (var key in res) {
    res[key] = res[key] / times * 100 + '%'
}

console.log(res)
})()
