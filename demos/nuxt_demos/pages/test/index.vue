<template>
  <div class="container">
    <span> {{ test }} </span>
    <NuxtLink to="/">Home page</NuxtLink>
    <br />
    <br />
    <div @click="refresh">refresh</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  layout: 'test',
  async asyncData() {
    console.log('async')
    return { xxx: 'test' }
  },
  data() {
    return {
      test: {},
    }
  },
  async fetch({ query, store, app }) {
    const post = await app.$axios.get(`https://api.nuxtjs.dev/posts/1`)
    console.log('fetch')
    // return { post }
    // this.test = post
  },
  head: { title: 'xxxx' },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log('created')
  },

  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
