<script setup>
//2. 接受父组件传递的props
import {ref} from "vue";

const props = defineProps({
    msg: String
})
// 通过defineEmits定义事件emit方法
const emit = defineEmits(['change'])

const name = ref('张三')
const setName = () => {
    name.value = '李四'
}
// 通过defineExpose暴露数据给父组件
defineExpose({
    name,
    setName
})
const sendMsg = () => {
    emit('change', 200)
}
</script>

<template>
    <div>
        <h1>子组件</h1>
        <p>{{ props.msg }}</p>
    </div>
<!--    子传父-->
    <button @click="sendMsg">子传父</button>
</template>