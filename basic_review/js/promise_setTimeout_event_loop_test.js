new Promise(resolve => {
  console.log("promise inner");
  resolve("xx");
}).then(d => {
  console.log("then");
});

setTimeout(() => {
  console.log("timeout");
});
console.log("outter");

// promise inner
// outter
// then
// timeout
