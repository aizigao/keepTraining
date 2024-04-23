<script>
export default {
  name: 'TreeNode',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isObject(value) {
      return typeof value === 'object' && value !== null && !Array.isArray(value)
    },
  },
}
</script>

<template>
  <div class="file-tree">
    <div v-for="(value, key) in (data.children || [])" :key="key" class="file-tree-sub">
      <div v-if="isObject(value)">
        <span>{{ key }}
          <span v-if="value.type === 'file'">
            {{ value.sizeHuman }}
          </span>
        </span>
        <TreeNode :data="value" />
      </div>
      <div v-else>
        <span>{{ value.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.file-tree {
  text-align: left;
}
.file-tree-sub {
  margin-left: 20px;
}
</style>
