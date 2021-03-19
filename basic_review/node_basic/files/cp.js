const fs = require('fs');

const copy = (src, dist) => {
  fs.writeFileSync(dist, fs.readFileSync(src));
};

// ---------- main  -----
function main(argv) {
  if (argv[0] === '--help') {
    console.log('TODO: help doc');
    process.exit();
  }
  if (!argv[0]) {
    console.log('请传入src');
    process.exit();
  }
  if (!argv[1]) {
    console.log('请传入dist');
    process.exit();
  }

  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
