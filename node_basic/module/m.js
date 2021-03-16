const a = {
  b: "old",
};
let c = "3333";

setTimeout(() => {
  a.b = "new";
  c = "444";
}, 200);

module.exports = {
  a,
  c,
};
