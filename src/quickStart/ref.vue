<script setup>
//1. 导入ref对象
import { ref } from "vue";

//2. 执行函数， 传入一个参数(可以是简单类型或者对象），变量接受返回值
const count = ref(0)

const increment = () => {
    //采用.value的方式获取值
    count.value++
}
</script>

<template>
  <p>count is: {{ count }}</p>
  <button @click="increment">Increment</button>
</template>

<style scoped>

</style>