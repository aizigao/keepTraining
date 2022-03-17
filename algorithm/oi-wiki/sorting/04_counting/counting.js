countSort = function (alist) {
    const C = [];
    for (let i = 0; i < alist.length; i++) {
        const j = alist[i];
        C[j] >= 1 ? C[j]++ : (C[j] = 1);
    }
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
