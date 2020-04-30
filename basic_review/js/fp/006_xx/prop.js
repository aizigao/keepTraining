var prop = _.curry(function (property, object) {
  return object[property];
});
