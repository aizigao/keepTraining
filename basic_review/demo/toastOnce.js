const rpOnce = (() => {
  let lastKey = null;
  let timer = null;
  return (cb = () => {}, key) => {
    if (lastKey === key) {
      return;
    }
    clearTimeout(timer);
    cb(key);
    lastKey = key;
    timer = setTimeout(() => {
      clearTimeout(timer);
      lastKey = null;
    }, 500);
  };
})();

const toast = msg =>
  rpOnce(iMsg => {
    console.log(iMsg);
  }, msg);

toast("11");
toast("11");
setTimeout(() => {
  console.log("test_Timeer1");
  toast("11");
}, 200);
setTimeout(() => {
  console.log("test_Timeer2");
  toast("11");
  toast("12");
  toast("11");
  toast("11");
  toast("11");
  setTimeout(() => {
    console.log("xxxxtime3");
    toast("11");
  }, 550);
}, 900);
// toast("22");
