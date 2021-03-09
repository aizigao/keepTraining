const request = (url) => {
  return new Promise((res, rej) => {
    console.log("正在请求", url);
    setTimeout(() => {
      if (url === "003") {
        rej("err");
        return;
      }
      res("ok");
    }, 1000);
  });
};

const oriUrls = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
  "011",
  "012",
];

const MAX_ERR_TRIED_TIMES = 3;

const batchRequest = (urls, maxCount) => {
  let penddingUrls = urls;
  const errorCountMap = {};

  const requestOne = () => {
    if (!penddingUrls.length) {
      return;
    }
    const curUrl = penddingUrls.shift();
    request(curUrl).then(
      () => {
        requestOne();
      },
      () => {
        // 抛错 再加回去
        penddingUrls = [curUrl, ...penddingUrls];

        if (!(curUrl in errorCountMap)) {
          errorCountMap[curUrl] = 1;
        } else {
          errorCountMap[curUrl] += 1;
        }
        if (errorCountMap[curUrl] <= MAX_ERR_TRIED_TIMES) {
          console.log(`重试${curUrl}`);
          requestOne();
        }
      }
    );
  };

  for (let i = 0; i < maxCount; i++) {
    requestOne();
  }
};

batchRequest(oriUrls, 3);
