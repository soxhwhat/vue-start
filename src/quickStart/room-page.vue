<script setup >
import {provide, ref} from "vue";
//1. 顶层组件提供数据
provide('data-key', '我是父组件的数据')

// 传递响应式数据
const data = ref(0)
provide('response-key', data)
setTimeout(()=>{
    data.value = 100
}, 3000)


//传递方法
const change = (value) => {
    console.log('父组件接收到子组件传递的值', value)
}
provide('change-key', change)
</script>

<template>
  <div>
      <h1>我是父组件</h1>
    <child-comp></child-comp>
  </div>
</template>

<style scoped>

</style>