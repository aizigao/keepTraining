var trace = curry(function (tag, x) {
  console.log(tag, x);
  return x;
});

var dasherize = compose(
  join("-"),
  toLower,
  split(" "),
  replace(/\s{2,}/gi, " ")
);

dasherize("The world is a vampire");
// TypeError: Cannot read property 'apply' of undefined
