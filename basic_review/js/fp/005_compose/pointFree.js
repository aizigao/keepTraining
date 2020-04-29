{
  // 非 pointfree，因为提到了数据：word
  var snakeCase = function (word) {
    return word.toLowerCase().replace(/\s+/gi, "_");
  };

  // pointfree
  var snakeCase = compose(replace(/\s+/gi, "_"), toLowerCase);
}
