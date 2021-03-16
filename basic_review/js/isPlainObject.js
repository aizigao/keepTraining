/***********************************
 * 通过原型链 方式
 **********************************/

const isPlainObject = (value) => {
  if (typeof value !== "object" || value === null) return false;

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
};
