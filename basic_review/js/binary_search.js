(() => {
  var test = [1, 5, 3, 6, 0, 2, 4, 6, 12, 345, 12].sort((a, b) => a - b);
  console.log(test);

  const getMid = (low, high) => {
    return parseInt((high - low) / 2 + low, 10);
  };

  const binarySearch = (arrSorted, findVal) => {
    let lowCursor = 0;
    let highCursor = arrSorted.length - 1;

    let resultIndex = -1;

    while (lowCursor <= highCursor) {
      let midCursor = getMid(lowCursor, highCursor);
      let midValue = arrSorted[midCursor];

      if (findVal === midValue) {
        resultIndex = midCursor;
        break;
      } else if (findVal < midValue) {
        highCursor = midCursor - 1;
      } else {
        lowCursor = midCursor + 1;
      }
    }
    return resultIndex;
  };

  console.log(binarySearch([1, 3, 4, 5, 2].sort((a, b) => a - b), 3));
  console.log(binarySearch(test, 0));
  console.log(binarySearch(test, 345));
})();
var a = () => {};
