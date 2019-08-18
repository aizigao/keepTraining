var fetch = require("node-fetch");
var co = require("co");
// use generator
(() => {
  function* gen() {
    var r1 = yield fetch("https://api.github.com/users/github");
    var json1 = yield r1.json();
    console.log(json1.bio);
  }
  co(gen);
})();

(() => {
  var fetchData = async function() {
    var r1 = await fetch("https://api.github.com/users/github");
    var json1 = await r1.json();
    console.log("async__ ", json1.bio);
  };
  fetchData();
})();
