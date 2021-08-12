// https://github.com/thx/gogocode
const $ = require("gogocode");
const fs = require("fs");

const code = `
  const moment = require('moment');
  var a = 1;
  const b = 2;
  function log (x, y = 'World') {
    console.log('a')
    console.log(a, x, y);
  }
`;

const AST = $(code);
const rst = AST.replace("a", "ccccc").generate();
console.log(rst);
// console.log(AST);

// fs.writeFile("./test.js", AST.value, () => {});
