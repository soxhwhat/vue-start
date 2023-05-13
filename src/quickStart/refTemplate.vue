<script setup>
import { onMounted} from "vue";

onMounted(() => {
    console.log('组件挂载完毕mounted执行了')
})

// 生命周期函数可以执行多次，多次执行的时候，会在时机成熟的时候依次执行
onMounted(() => {
    console.log('组件更新完毕mounted执行了')
})
</script>

<template>
    <p ref="p">hello</p>
</template>