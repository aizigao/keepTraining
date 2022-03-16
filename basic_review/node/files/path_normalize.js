const path = require('path');

const cache = {};

function store(k, v) {
  cache[path.normalize(k)] = v;
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);
store('../f////baz//../bar', 2);
console.log(cache); // => { "foo/bar": 2 }
