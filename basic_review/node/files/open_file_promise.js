// https://juejin.cn/post/7068169538977660935
const fsPromise = require('fs/promises')


async function openFile(path) {
  let fileHandle

  try {
    fileHandle = await fsPromise.open(path, 'r')
    console.log(`opened ${path}, file descriptor is ${fileHandle.fd}`);
    const data = await fileHandle.read()
    console.log({ data })
  } catch (e) {
    console.error(e)
  } finally {
    fileHandle?.close()
  }
}



openFile('/etc/hosts')