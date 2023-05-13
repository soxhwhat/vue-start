<script setup>
//1. 导入方法
import {useCounter} from "@/quickStart/piniaCounter";

//2. 执行方法得到的实例对象
const counterStore = useCounter()
</script>

<template>
    <div>
        <h1>我是piniaCounter组件</h1>
        <p>当前的count值为：{{ counterStore.count }}</p>
        <button @click="counterStore.increment">+1</button>
        <button @click="counterStore.decrement">-1</button>
        <button @click="counterStore.doubleCount">double</button>
    </div>
</template>

<style scoped>

</style>