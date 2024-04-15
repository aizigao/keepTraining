<script setup lang="ts">
import { transform } from 'cypress/types/lodash'

// https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/

const s = reactive({
  rotationAngle: 0,
  scaleX: 1,
  scaleY: 1,
})
// const s = setting
</script>

<template>
  <div>
    <div class="wrap">
      <img
        src="/Jietu20220624-151802.png" class="img"
        :style="{
          transform: `rotate(${s.rotationAngle}deg) scaleX(${s.scaleX})
          scaleY(${s.scaleY})
          `,
        }
        "
      >
    </div>
    <div class="btns flex">
      <button @click="s.rotationAngle = (s.rotationAngle + 90) % 360">
        旋转
      </button>
      <button @click="s.scaleX = -s.scaleX">
        水平
      </button>
      <button @click="s.scaleY = -s.scaleY">
        垂直
      </button>
    </div>
  </div>
</template>

<style lang="less">
.img {
  width: 200px;
  height: 200px;
  display: block;
  transform-origin: center center;
}
.btns {
  display: flex;
  width: 200px;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
