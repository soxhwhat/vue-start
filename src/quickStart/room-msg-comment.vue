<script setup>
// 2. 接收数据
import {inject} from "vue";

const roomData = inject('data-key')

// 接收响应式数据
const data = inject('response-key')


// 接收方法
const change = inject('change-key')
</script>

<template>
  <div>
      <h1>我是子组件</h1>
      <p>来自顶层组件的数据：{{ roomData }}</p>
      <p>来自顶层组件的响应式数据：{{ data }}</p>
      <button @click="change(100)">使用方法修改顶层的数据</button>
  </div>
</template>

<style scoped>

</style>