<script lang="ts">
const supportExt = [
  'pdf',
  'txt',
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
  // ---
  'jpg',
  'jpeg',
  'png',
]

function formatBytes(bytes: number) {
  if (bytes === 0)
    return '0Bytes'
  const k = 1024
  const sizes = ['Bytes', 'kb', 'Mb', 'Gb', 'Tb']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / k ** i).toFixed(2)) + sizes[i]
}

function buildTreeFromPaths(entries: Record<string, { data: ArrayBufferLike }>) {
  const tree: any = {
  }
  const paths = Object.keys(entries)

  paths.forEach((path) => {
    const parts = path.split('/').filter(Boolean) // 将路径分割成部分，并且去除空部分
    let currentNode = tree
    const ext = (path.split('.').pop() || '').toLocaleLowerCase()
    if (!supportExt.includes(ext))
      return

    const data = entries[path].data
    const size = data.byteLength
    const sizeHuman = formatBytes(size)

    parts.forEach((part, index) => {
      if (!currentNode.children)
        currentNode.children = {}

      if (!currentNode.children[part])
        currentNode.children[part] = {}

      currentNode = currentNode.children[part] // 将当前节点设置为下一个节点

      if (index === parts.length - 1) {
        Object.assign(currentNode, {
          type: 'file',
          path,
          name: `${part}.${ext}`,
          size,
          sizeHuman,
        })
      }
    })
  })

  console.log(tree, 'zzzzzzz')
  return tree
}
</script>

<script setup lang="ts">
const fileMap = {
  'zippppppppp/.DS_Store': { errMsg: 'readZipEntry:ok', data: new ArrayBuffer(6148) },
  'zippppppppp/EasyConnectPhone.apk': { errMsg: 'readZipEntry:ok', data: new ArrayBuffer(30306069) },
  'zippppppppp/a4.pdf': { errMsg: 'readZipEntry:ok', data: new ArrayBuffer(3164) },
  'zippppppppp/zyb_6f0f3a7b3f3655372ac672f26734f3b4.jpg': { errMsg: 'readZipEntry:ok', data: new ArrayBuffer(17652) },
  'zippppppppp/zzz/Vue.js设计与实现(1).pdf': { errMsg: 'readZipEntry:ok', data: new ArrayBuffer(20405656) },
}

// console.log(buildTreeFromPaths(fileMap), 'zzzzzz')
const rootNode = ref(buildTreeFromPaths(fileMap))
</script>

<template>
  <div>
    <TreeNode :data="rootNode" />
  </div>
</template>

<style lang="less" scoped>
// --
</style>
