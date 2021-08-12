// https://github.com/thx/gogocode
const $ = require("gogocode");
const fs = require("fs");

const code = `
  const moment = require('moment');
  var o = 1;
  const b = 2;
  function log (x, y = 'World') {
    console.log('o')
    console.log(o, x, y);
  }
`;

const AST = $(code);
console.log(AST);
const rst = AST.replace("o", "ccccc").generate();
console.log(rst);
// console.log(AST);

// fs.writeFile("./test.js", AST.value, () => {});
