<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const setCount = () => {
    count.value++
}

const name = ref('sam')
const setName = () => {
    name.value = 'jack'
}

const state = ref({
    count: 0,
    name: 'sam'
})
// watch监听count的变化(单数据源）
watch(count, (value, oldValue) => {
    console.log('count changed', value, oldValue)
})

// watch监听count的变化(多数据源）
watch([count, name], ([countValue, nameValue], [countOldValue, nameOldValue]) => {
    console.log('count changed', countValue, countOldValue)
    console.log('name changed', nameValue, nameOldValue)
})

// immediate: 在侦听器创建时立即执行回调
watch(count, (value, oldValue) => {
    console.log('count changed', value, oldValue)
}, { immediate: true })

//deep: 通过watch监听的ref对象默认是浅层侦听，直接修改嵌套的对象属性是不会触发回调的，需要开启deep
watch(state, ()=> {
    console.log('state changed')
}, { deep: true })

// 精准侦听对象的某个属性，此处当state.count变化时，回调才会执行
watch(() => state.value.count, (value, oldValue) => {
    console.log('state.count changed', value, oldValue)
})
</script>

<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="setCount">Increment</button>
    </div>

    <div>
        <h1>Name: {{ name }}</h1>
        <button @click="setName">setName</button>
    </div>

    <div>
        <h1>State: {{ state }}</h1>
        <button @click="state.count++">setState</button>
    </div>
</template>