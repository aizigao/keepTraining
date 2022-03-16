console.log("计算A+B");
console.log("请输入a");

process.stdin.resume();

let a = null;
let b = null;
process.stdin.on("data", chunk => {
  if (!a) {
    a = Number(chunk);
    process.stdout.write("请输入b\n");
  } else {
    b = Number(chunk);
    process.stdout.write("结果为\n");
    process.stdout.write(String(a + b));
    process.exit();
  }
});
