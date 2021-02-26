{
  const hi = (name) => `Hi ${name}`;
  const greeting = (name) => hi(name);
}

// --->

{
  const hi = (name) => `Hi ${name}`;
  const greeting = hi;
}

{
  var fs = require("fs");

  // 太可怕了
  fs.readFile("freaky_friday.txt", Db.save);

  // 好一点点
  fs.readFile("freaky_friday.txt", Db.save.bind(Db));
}
