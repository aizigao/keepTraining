<script setup lang="ts">
import * as mupdf from 'mupdf'

async function handleSomePdf() {
  const arrayBuff = await fetch('https://miaobao-pub.paperang.com/document/82f2acaa412d45ec92000c79b30d82a0.pdf')
  // --
    .then(d => d.arrayBuffer())
    // --
    .then(d => new Uint8Array(d))
  console.log(mupdf)
  // const mupdf = await createMuPdf()
  // const doc = mupdf.load(arrayBuff)
  // ...
}
</script>

<template>
  <button @click="handleSomePdf()">
    加载
  </button>
</template>

<style lang="less" scoped>
// --
</style>
