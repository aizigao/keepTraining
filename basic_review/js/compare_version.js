const isNewVersion = (oldStr, newStr, contrastIdx = 0) => {
  const oldArr = [0, 0, 0];
  const newArr = [0, 0, 0];
  oldArr.splice(0, oldStr.split(".").length, ...oldStr.split("."));
  newArr.splice(0, newStr.split(".").length, ...newStr.split("."));

  const oldTag = parseInt(newArr[contrastIdx], 10);
  const newTag = parseInt(oldArr[contrastIdx], 10);
  if (oldTag === newTag) {
    if (contrastIdx === 2) {
      return false;
    }
    return isNewVersion(oldStr, newStr, contrastIdx + 1);
  } else if (oldTag < newTag) {
    return false;
  }
  return true;
};

console.log(isNewVersion("1.0.1", "2.111.33"));
