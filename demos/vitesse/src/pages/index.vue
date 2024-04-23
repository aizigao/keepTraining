<script setup lang="ts">
import { transform } from 'cypress/types/lodash'

// https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/

// const s = setting
</script>

<template>
  <div class="list">
    <div class="list-item flex flex-col">
      <div class="list-item-header flex items-center">
        <img class="list-item-header-icon">用户昵称
      </div>
      <div class="list-item-main flex">
        <img class="list-item-main__left">
        <div class="list-item-main__right flex flex-1 flex-col">
          <div class="lim-line flex items-start justify-between">
            <div class="flex-1">
              文件名文件名文件名文件名文件名文件名文件名文件名
            </div>
            <img class="list-item-del">
          </div>
          <div class="lim-line print-hint">
            3页 2份 彩色
          </div>
          <div>
            打印中 打印成功 排队中
          </div>
        </div>
      </div>
      <div class="list-item-bottom flex justify-end">
        <button>重新打印</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.list {
  padding: 32px;
  background-color: #ddd;
}
.list-item {
  font-size: 32px;
  text-align: left;
  width: 100%;
  border-radius: 16px;
  background-color: #fff;
  margin-bottom: 32px;
  .list-item-del {
    width: 42px;
    flex-shrink: 0;
    height: 42px;
  }
}
.list-item-header {
  height: 96px;
  color: #000;
  font-size: 32px;
  line-height: 1.2;
  padding: 32px;
  border-bottom: 1px solid #ddd;
  .list-item-header-icon {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 16px;
    background-color: #ddd;
  }
}
.list-item-main {
  padding: 32px;
  .list-item-main__left {
    width: 80px;
    height: 120px;
    margin-right: 32px;
    background-color: red;
  }
  .list-item-main__right {
    height: 100%;
  }
}
.list-item-bottom {
  padding: 32px;
}
.lim-line {
}
.print-hint {
  color: #ddd;
  font-size: 28px;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
