<script setup>
// 1. 导入函数
import { reactive} from "vue";

// 2. 执行函数， 传入一个对象类型的参数 变量接受返回值,注意返回值也是一个对象
// 不用reactive的话，state.count是不会响应式的，变量的值不会变化
const state = reactive({
    count: 0
})

const setState = () => {
    state.count++
}
</script>

<template>
    <div>
        <h1>Count: {{ state.count }}</h1>
        <button @click="setState">Increment</button>
    </div>

</template>

<style scoped>

</style>