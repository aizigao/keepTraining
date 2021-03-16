function instanceOf(instance, Super) {
  let proto = Object.getPrototypeOf(instance);
  const prototype = Super.prototype;

  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

class A {}
{
}

const a = new A();

console.log(instanceOf(a, A));
