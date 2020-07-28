// touch write

const fs = require("fs");

const file =
  "/Users/aizigao/MyWorkPlace/ibus/app/active/active_pages_umi/src/pages/CardList/build/index/_pages/CardList/component/show.css";

fs.readFile(file, "utf-8", (err, data) => {
  console.log(data);
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
  const rdata = data.replace(/([\d.]*)rem/g, (match, $1) => {
    const r = Math.round(Number($1) / 0.02);
    return r + "px";
  });
  fs.writeFile(file, rdata, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
