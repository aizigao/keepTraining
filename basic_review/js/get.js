function get(obj, path, def) {
  var fullPath = path
    .replace(/\[/g, ".")
    .replace(/]/g, "")
    .split(".")
    .filter(Boolean);

  return fullPath.every((step) => {
    return !(step && (obj = obj[step]) === undefined);
  })
    ? obj
    : def;
}

var a = { b: { c: 3 } };

console.log(get(a, "b.c"));
console.log(get(a, "[b][c]"));
console.log(get(a, "b.d", "default"));
