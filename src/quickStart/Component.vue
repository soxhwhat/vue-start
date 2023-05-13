<script setup>
// 引入子组件
import ChildComp from './ChildComp.vue'
import {ref} from "vue";

const msg = ref(100)
setTimeout(() => {
    msg.value = 200
}, 2000)

const change = (value) => {
    console.log('父组件接收到子组件传递的值', value)
}

const childRef = ref(null)
</script>

<template>
<!--    绑定属性msg-->
    <ChildComp :msg="msg"></ChildComp>

<!--    子传父-->
    <ChildComp @change="change"></ChildComp>

<!--    父组件传递子组件属性-->
    <ChildComp ref="childRef"></ChildComp>
</template>