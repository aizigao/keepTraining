const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
const isAndroid = /(android)/i.test(navigator.userAgent)


function getChromeVersion () {
  var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
  return raw ? parseInt(raw[2], 10) : false
}

let needFastClick = true
if (isIOS && window.webkit && window.webkit.messageHandlers) {
  needFastClick = false
} else if (isAndroid && getChromeVersion(window.navigator.userAgent) >= 32) {
  needFastClick = false
}

