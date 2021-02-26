const Maybe = require("./Maybe");
const R = require("ramda");

// safeHead: [a] -> Maybe(a)
var safeHead = function (xs) {
  return Maybe.of(xs[0]);
};

var streetName = R.compose(
  R.map(R.prop("street")),
  safeHead,
  R.prop("addresses")
);

console.log(streetName({ addresses: [] }));
console.log(streetName({ addresses: [{ street: "Shady Ln.", number: 4201 }] }));
