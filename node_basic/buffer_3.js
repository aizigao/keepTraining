// 静态方法
console.log(Buffer.isEncoding('utf-8'));

const a = [];
console.log(Buffer.isBuffer(a));

// 字节长度
console.log(Buffer.byteLength('夺')); // utf-8 3
console.log(Buffer.byteLength('夺', 'ascii')); //  1

const str1 = 'hklz';
const str2 = '夺在';

const list = [new Buffer(str1), new Buffer(str2)];

// const bf = Buffer.concat(list);
const bf = Buffer.concat(list, 11);
console.log('bf', bf);
