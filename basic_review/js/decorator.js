function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  };
}

// TODO:
class Mytestable {}
