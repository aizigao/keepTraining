// touch write

const fs = require("fs");
const np = require("number-precision");

const file = process.argv[2];

const main = () => {
  if (!file) {
    return;
  }
  fs.readFile(file, "utf-8", (err, data) => {
    console.log(data);
    // => [Error: EISDIR: illegal operation on a directory, read <directory>]
    const rdata = data.replace(/([\d.]*)rem/g, (match, $1) => {
      const r = np.divide(Number($1), 0.02);
      return r + "px";
    });
    fs.writeFile(file, rdata, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
};

main();
