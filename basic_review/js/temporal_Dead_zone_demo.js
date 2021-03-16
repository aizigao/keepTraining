var value = "global";

// tdz

// eg.1
(function () {
  console.log(value); // Cannot access 'value' before initialization

  let value = "local";
})();

// eg.2
{
  console.log(value); // Cannot access 'value' before initialization

  const value = "local";
}
