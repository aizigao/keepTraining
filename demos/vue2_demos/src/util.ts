import request from '@/config/request.js'
import { isPaperangApp } from '@/utils/systemInfo'
import { map, isUndefined } from 'lodash'
import { del } from '@vue/composition-api'

export function type(obj) {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase()
}

export function getUrlParams(search = window.location.search.slice(1)) {
  const params = {}
  search.split('&').forEach(item => {
    if (item === '') return true
    const [key, ...val] = item.split('=')

    const value = decodeURIComponent(val.join('='))
    if (params[key]) {
      if (type(params[key]) === 'array') {
        params[key].push(value)
      } else {
        params[key] = [params[key], value]
      }
    } else if (type(key) === 'string') {
      params[key] = value || undefined
    }
  })
  return params
}

export function assign(objA, objB, prevent = []) {
  const ouput = { ...objB }
  Object.keys(objA).forEach(item => {
    if (prevent.indexOf(item) < 0) {
      ouput[item] = objA[item]
    }
  })
  return ouput
}

export function addUrlParams(url = window.location.href, params = {}) {
  let str = ''
  Object.keys(params).forEach(item => {
    if (params[item]) {
      str += `${item}=${params[item]}&`
    }
  })
  str = str.slice(0, str.length - 1)
  if (url.indexOf('?') > 0) {
    str = `${url}&${str}`
  } else {
    str = `${url}?${str}`
  }
  return str
}

export function getValueByPath(obj, path = '') {
  const paths = path.split('.')
  let current = obj || {}
  const len = paths.length
  try {
    for (let i = 0; i < len; i++) {
      current = current[paths[i]]
    }
  } catch (e) {
    current = undefined
  }
  return current
}

export const image2Base64 = img => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = '*'
    image.src = img + '?v=' + Math.random() // 处理缓存
    image.onload = function () {
      const base64 = getBase64Image(image)
      resolve(base64)
    }
  })
}

export const imageAjaxBase64 = imgUrl => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', imgUrl, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (this.status === 200) {
        const a = new FileReader()
        a.readAsDataURL(this.response)
        a.onload = function (e) {
          const base64 = e.target.result.replace('application/octet-stream', 'image/png')
          resolve(base64)
          // console.log('获取图片数据', base64)
        }
      }
    }
    xhr.send()
  })
}

function getBase64Image(image) {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0, image.width, image.height)
  const dataURL = canvas.toDataURL('image/png')
  return dataURL
}

/**
 * 打开链接打开app/下载app链接
 * @param { Object } trackData // 打开app埋点对应参数 参数详情参考 trackPoint 方法
 */
export const openApp = trackData => {
  const androidUrl = 'paperang://cn.paperang.mm'
  const androidDownloadURl = 'https://sj.qq.com/myapp/detail.htm?apkName=cn.paperang.mm'
  const iosUrl = 'miaomiaoji://'
  const iosDownloadUrl =
    'https://itunes.apple.com/cn/app/%E5%96%B5%E5%96%B5%E6%9C%BA/id1179683066?l=zh&ls=1&mt=8'

  // 当有传埋点所需数据的情况 则触发埋点事件
  // eslint-disable-next-line no-prototype-builtins
  if (trackData && typeof trackData === 'object' && trackData.hasOwnProperty('parameter')) {
    trackPoint(trackData)
  }

  const IsAndroid = navigator.userAgent.indexOf('Android') > -1
  const isMac = navigator.userAgent.indexOf('Mac') > -1
  const isQQ = navigator.userAgent.indexOf('QQBrowser') > -1
  const isMQQ = navigator.userAgent.indexOf('MQQBrowser') > -1

  if (isQQ) {
    window.location.href = androidDownloadURl
  } else if (isMac) {
    window.location.href = iosDownloadUrl
  } else if (IsAndroid) {
    if (isMQQ) {
      window.location.href = androidDownloadURl
    } else {
      const loadTime = new Date()
      window.location.href = androidUrl
      setTimeout(() => {
        const outTime = new Date()
        if (outTime - loadTime > 800) window.location.href = androidDownloadURl
      }, 1000)
    }
  } else {
    const loadTime = new Date()
    window.location.href = iosUrl
    setTimeout(() => {
      const outTime = new Date()
      if (outTime - loadTime > 800) window.location.href = iosDownloadUrl
    }, 1000)
  }
}
/**
 * 打开链接打开错题app/下载app链接
 * @param { Object } trackData // 打开app埋点对应参数 参数详情参考 trackPoint 方法
 */
export const openWrongApp = trackData => {
  window.location.href =
    'https://paperang.com/download/app/mmstudy/index.html?appName=com.paperang.study'
}
/**
 * 操作埋点
 * @param { Object } data
 * @param { Object } data.parameter // 埋点配置
 * @param { String } data.parameter.type // 活动id 口头定义提供后台查数据用    必填
 * @param { String } data.parameter.page // 记录哪个页面调用  选填
 * @param { String } data.parameter.channel // 访问渠道 站内‘app’ 站外‘outside’  必填
 * @param { String } data.parameter.remark // 备注，一般传活动标题  必填
 * @param { String } data.parameter.buttonId // 记录哪个按钮， String, Number   选填
 */
export const trackPoint = async params => {
  const data = Object.assign({ method: 'AdvBuryingPoint' }, params)
  try {
    await request.post(data)
  } catch (error) {
    console.log(error)
  }
}
/**
 * 拷贝链接
 * @param { String } txt // 需要拷贝的字符串
 */
export const copyText = async txt => {
  const copyInput = document.createElement('input')
  copyInput.readOnly = 'readonly'
  copyInput.value = txt
  document.body.appendChild(copyInput)
  copyInput.select()
  copyInput.setSelectionRange(0, copyInput.value.length)
  document.execCommand('copy')
  document.body.removeChild(copyInput)
}
/**
 * 设置cookie
 * @param { String } name cookie name
 * @param { String } value cookie value
 * @param { String } time cookie time
 */
export const setCookie = (name, value, time) => {
  time = time || 240
  const exp = new Date()
  const domain = /.paperang.com/.test(location.host) ? '.paperang.com' : '.suanshubang.com'
  exp.setTime(exp.getTime() + time * 60 * 1000)
  document.cookie =
    name + '=' + escape(value) + `;domain=${domain};path=/;expires=` + exp.toGMTString()
}
/**
 * 拿cookie
 * @param { String } name cookie name
 */
export const getCookie = name => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}
// 判断手机号
export const isMobile = s => {
  return /^1[0-9]{10}$/.test(s)
}
export const isChinese = str => {
  return /^[\u4e00-\u9fa5]{1,}$/.test(str)
}

// 防抖
export function debounce(fn = () => { }, delay = 200, immediate = false) {
  let timer = null
  let tag = true
  if (immediate) {
    return function () {
      if (timer) clearTimeout(timer)
      if (tag) {
        fn.apply(this, arguments)
        tag = false
      }
      timer = setTimeout(() => {
        tag = true
      }, delay)
    }
  }
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

export function throttle(fn, wait) {
  let prev = new Date()
  return function () {
    const args = arguments
    const now = new Date()
    if (now - prev > wait) {
      fn.apply(this, args)
      prev = new Date()
    }
  }
}

export const getSearch = (name, url) => {
  if (!url) {
    url = window.location.href
  }
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return ''
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

// 返回needAuth
export const isNeedAuth = () => {
  let needAuth = false
  if (navigator.userAgent.indexOf('paperang') > -1) needAuth = true

  return needAuth
}
// 返回操作系统类型
export const equipType = () => {
  const u = navigator.userAgent
  return {
    isIos: u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1,
    isAndroid: u.indexOf('Android') > -1
  }
}

let x 

// 将图片转化为链接
export const getObjectURL = file => {
  let url = null
  if (window.createObjectURL !== undefined) {
    // basic
    url = window.createObjectURL(file.target.files[0])
  } else if (window.URL !== undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(file.target.files[0])
  } else if (window.webkitURL !== undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file.target.files[0])
  }
  return url
}
class GetQuery {
  constructor(props) {
    this.props = this.testUrl(props) || window.location.search
  }

  // 判断传入是否为url
  testUrl(url) {
    if (/^http[s]?:\/\/.*/.test(url)) {
      return `?${url.split('?')[1]}`
    }
    return false
  }

  // 返回url参数列表对象
  parse() {
    const search = this.props
    if (search.indexOf('?') !== 0) {
      return {}
    }
    const querystring = search.substring(1)
    const queries = querystring
      .split('&')
      .map(str => str.split('='))
      .reduce((acc, curr) => Object.assign(acc, { [curr[0]]: curr[1] }), {})
    return queries
  }

  // 获取url对应参数
  get(name) {
    const queries = this.parse()
    if (queries === {}) {
      return ''
    }

    return queries[name]
  }
}
// 获取url参数
export const getQuery = new GetQuery()


/**
 * 包裹 Promise, 抛出错误 返回 [error], 正常返回 [null, res]
 * @param {*} promise
 * @returns [Error, any]
 * @example
 *
 *
 *const res = Promise.resolve("ok");
 *const rej = Promise.reject("error");
 *
 *!(async () => {
 *  const test1 = await to(res); // [null,ok]
 *  const test2 = await to(rej); // ['error']
 *  console.log(test1, test2);
 *})();
 */
export const to = function to(promise) {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => {
      return [err];
    });
};



/**
 * 防止异步函数多次执行
 * @param {*} asyncFn
 * @returns
 */
export const asyncLock = function (asyncFn) {
  const lockIns = { lock: false };
  return async function (...args) {
    if (lockIns.lock) {
      return;
    }
    lockIns.lock = true;
    const [err, rst] = await to(asyncFn.call(this, ...args) || Promise.resolve());
    lockIns.lock = false;
    if (err) {
      throw err;
    }
    return rst;
  };
};

/**
 * 取随机整数
 * random:: (Number,Number) -> Number
 * @param {*} minInt
 * @param {*} maxInt
 * @returns
 */
export const randomInt = (minInt, maxInt) =>
  Math.round(Math.random() * (maxInt - minInt) + minInt);


// promisify setTimeout
export function delay(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}


export function isDef(val) {
  return val !== undefined && val !== null;
}

export function isNil(val) {
  return !isDef(val);
}

export function get(object, path) {
  const keys = path.split(".");
  let result = object;

  keys.forEach((key) => {
    result = result[key] ?? "";
  });

  return result;
}

const listIt = (v) => {
  if (Array.isArray(v)) {
    return v;
  }
  return [v];
};

export const qs = {
  stringify(obj) {
    const keys = Object.keys(obj);
    const rst = keys.filter(key => !isUndefined(obj[key])).reduce((assemStr, key) => {
      const keyEncoded = encodeURIComponent(key);
      const valueEncoded = encodeURIComponent(obj[key]);
      return assemStr + "&" + [keyEncoded, valueEncoded].join("=");
    }, "");
    return rst.replace(/^&/, "");
  },
  parse: (str) => {
    if (!str) {
      return {};
    }

    return str.split("&").reduce((assem, singleStr) => {
      let [key, value] = singleStr.split("=").map((i) => decodeURIComponent(i));

      // 处理基本类型

      switch (true) {
        // boolean
        case value === "true":
          value = true;
          break;
        case value === "false":
          value = false;
          break;
        // nil
        case value === "null":
          value = null;
          break;
        case value === "undefined":
          value = undefined;
          break;
        // number
        case /^[-+]?[\d.]+$/.test(value):
          value = Number(value);
          break;
      }

      return {
        ...assem,
        // TIPS: 暂时不处理数组类型了
        // [key]: key in assem ? [...listIt(assem[key]), value] : value,
        // 重复key 用后面一个
        [key]: value
      };
    }, {});
  }
};




/**
 * webview 内初始化时，大小都是0
 */
let containerWidth = window.document.documentElement.getBoundingClientRect()
  .width;
window.addEventListener('resize', () => {
  containerWidth = window.document.documentElement.getBoundingClientRect()
    .width;
})
export const DESIGN_DOC_WIDTH = 750;
/**
* 获取缩放比例
* (void) -> number
* @example
* 设计稿大小 x
* const x = 30
* rX = x * getScaleRate()
*/
export const getScaleRate = () => {
  /**
   * 设计稿x2
   */
  return containerWidth / (DESIGN_DOC_WIDTH / 2);
};


export function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...nextFnOrArgs) => a(b(...nextFnOrArgs)));
}


export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}




/**
  console.log(1, safeJSONParse(JSON.stringify({ dsfsdf: "dfsdfdsf" })));
  console.log(2, safeJSONParse(JSON.stringify(["2323", "23423", "2323"])));
  console.log(3, safeJSONParse(222)); // null
  console.log(4, safeJSONParse('dfdfdfdf')); // null
  console.log(5, safeJSONParse("'dfdfdfdf'"));
  console.log(6, safeJSONParse(`"dfdfdfdf"`));
*/
export const safeJSONParse = (dataStr, fallback = null) => {
  let rst = fallback;
  // if (!/^\s*[{["]/.test(dataStr)) {
  //   return fallback;
  // }
  try {
    rst = JSON.parse(dataStr);
  } catch (e) {
    console.error("[safeJSONParse] originString: ", dataStr);
  }
  return rst;
};


// 格式化提升同类题的数据结构
export const formatSimilar = (data) => {
  let questionInfo = null;
  let queryContent = {
    // 和 type=1 的错题的数据结构保持一致
    question: {
      content: "",
      picList: []
    },
    answer: [
      {
        content: "",
        picList: []
      }
    ],
    tid: data.outTid || ""
  };

  if (data.type === 3) {
    // 根据outTid获取的同类题
    const JSONData = JSON.parse(data.queryContent);
    questionInfo = JSONData.latexQuestion;
    // 防止 latexQuestion 被 stringify
    if (typeof questionInfo === "string") {
      questionInfo = JSON.parse(questionInfo);
    }
    queryContent.answer[0].content = JSONData.latexAnswer; // 构造答案
  } else {
    // 根据知识点获取的同类题
    questionInfo = data.questionInfo;
    queryContent.answer[0].content = data.answer; // 构造答案
    data.type = 3;
  }

  // 构造题目
  if (questionInfo.title) {
    queryContent.question.content = questionInfo.title;
  } else {
    queryContent.question.content = questionInfo.content;
    if (!(questionInfo.questionList instanceof Array)) {
      questionInfo.questionList = Object.values(questionInfo.questionList);
    }
    // 构造选项
    questionInfo.questionList.forEach((question) => {
      let html = question.title;
      Object.entries(question.options).forEach((item) => {
        html += `<p>${item[0]}：${item[1].replace(/<\/?p>/g, "")}</p>`;
      });
      queryContent.question.content += html;
    });
  }

  // 构造选项
  if (questionInfo.options) {
    let html = "";
    Object.entries(questionInfo.options).forEach((item) => {
      html += `<p>${item[0]}：${item[1].replace(/<\/?p>/g, "")}</p>`;
    });
    queryContent.question.content += html;
  }

  queryContent = JSON.stringify(queryContent);

  return {
    ...data,
    queryContent
  };
};
/**
 *
 * 端内对比版本号
 * @param {*} atLeastVersionStr 需要功能最低版本号
 * @returns
 */
export const atLeastAppVersion = (atLeastVersionStr) => {
  const crtVersionStr = window.PaperangJS?.app?.version
  const isDevLocal = process.env.NODE_ENV === 'development'
  /**
   * 下面情况直接 true
   * 1. 没有版本号
   * 2. 不在app内 && 非本地
   */
  if (!crtVersionStr || (!isPaperangApp && !isDevLocal)) {
    return true
  }
  const crtVersion = crtVersionStr.split('.').map((v) => parseInt(v))
  const atLstVersion = atLeastVersionStr.split('.').map((v) => parseInt(v))

  const deep = (crtV, atLstV, idx = 0) => {
    // 最小目标版本 子版本 小于 当前子版本
    if (atLstV[idx] < crtV[idx]) {
      return true
    } else {
      // 目最小目标版本 子版本 等于 当前子版本 继续对比下一个子版本
      if (crtV[idx] === atLstV[idx]) {
        if (idx < crtV.length - 1) {
          return deep(crtV, atLstV, ++idx)
        } else if (idx === crtV.length - 1) {
          // 完全相等时
          return true
        }
      }
      // 目标版本 子版本 小于 当前子版本
      return false
    }
  }
  return deep(crtVersion, atLstVersion)
}


export function splitNewLineContent(ss, startSpace = true) {
  const rst = (ss || '')
    .split(/[\r\t\n]/g)
    .map((s) => s.replace(/^\s*/, startSpace ? '\u2003\u2003' : ''))
    .filter((s) => !!s)
  return rst
}

/**
 * 清空相应式对象
 * @param {*} obj reactive 包裹的对象
 */
export const cleanReactiveData = (obj = {}) => {
  map(obj, (value, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      del(obj, key)
    }
  })
}


/**
 * 已全角宽度为准的长度, 非全角算0.5长度
 * @param name
 */
export const wordLen = (name) => {
  if (name == '') return 0
  if (typeof name !== 'string') {
    return 0
  }
  // 中文和全角字符, 替换为半角再计算
  const reg = /[\u4e00-\u9fa5\uff00-\uffff]/g
  return name.replace(reg, '00').length / 2
}


export function imgPreload(images) {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i]
  }
}
