const chokidar = require("chokidar");

// One-liner for current directory
chokidar.watch("./src").on("all", (event, path) => {
  console.log(event, path);
});
