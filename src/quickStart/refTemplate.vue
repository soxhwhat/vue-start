<script setup>
import {onMounted, ref} from "vue";

//1. 调用ref函数 -> ref 对象
const h1Ref = ref(null)

onMounted(() => {
    console.log('组件挂载完毕mounted执行了' + h1Ref.value)
})

// 生命周期函数可以执行多次，多次执行的时候，会在时机成熟的时候依次执行
onMounted(() => {
    console.log('组件更新完毕mounted执行了')
})
</script>

<template>
<!--    2. 通过ref标识绑定ref对象-->
    <h1 ref="h1Ref">我是标签h1</h1>
</template>