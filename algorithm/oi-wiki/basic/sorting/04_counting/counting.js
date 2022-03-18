countSort = function (alist) {
    // 计数数组
    const C = [];

    // 计数
    for (let i = 0; i < alist.length; i++) {
        const item = alist[i];
        if (item in C) {
            C[item] += 1;
        } else {
            C[item] = 1;
        }
    }

    // 下面没有用前缀和优化, 可以看 py 版本
    const D = [];
    for (let j = 0; j < C.length; j++) {
        if (C[j]) {
            while (C[j] > 0) {
                D.push(j);
                C[j]--;
            }
        }
    }
    return D;
};
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100];
console.log(countSort(arr));
