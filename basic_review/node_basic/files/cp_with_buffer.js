const fs = require('fs');

const copy = (src, dist) => {
  // fs.writeFileSync(dist, fs.readFileSync(src));
  // use stream
  fs.createReadStream(src).pipe(fs.createWriteStream(dist));
};

// ---------- main  -----
function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
