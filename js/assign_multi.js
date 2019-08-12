// 原文：https://www.jb51.net/article/75496.ht://www.jb51.net/article/75496.htm
{
    let a = {n:1};
    a.x = a = {n:2};
    // 这里为什么是 undefined
    console.log(a.x); // undefined
}
{
    let a = {n:1};
    a = {n:2};
    a.x = a
    console.log(a.x); // { n: 2, x: [Circular] }
}



/***********************************
 * 1. 执行前，a 与 a.x 中引用地址者取出来， 他们都指向 {n: 1}
 * 2. 在内存中创建了新对象 {n:2}
 * 3. 执行 a = {n:2}, a的引用地址指向新的{n:2}
 * 4. a.x = a， a->新的对象， a.x保留了原引用， a.x 指向了{n:1}
 * 5. 执行完成后， 原对象为 {n:1, x:{n:2}}, 而原对象因为无人再引，所以GC回收
 **********************************/
