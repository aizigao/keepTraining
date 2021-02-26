const R = require("ramda");
//  maybe :: b -> (a -> b) -> Maybe a -> b
var maybe = R.curry(function (x, f, m) {
  return m.isNothing() ? x : f(m.__value);
});

const log = (x) => {
  console.log(x);
  return f(x);
};

//  getTwenty :: Account -> String
var getTwenty = R.compose(
  log,
  maybe("You're broke!", finishTransaction),
  R.withdraw(20)
);

getTwenty({ balance: 200.0 });
// "Your balance is $180.00"

getTwenty({ balance: 10.0 });
// "You're broke!"
