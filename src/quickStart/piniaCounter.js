import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounter = defineStore('counter', ()=> {
    // 定义数据
    const count = ref(0)

    // 定义方法
    const increment = () => count.value++
    const decrement = () => count.value--

    //getter定义
    const doubleCount = computed(() => count.value * 2)

    // 异步方法
    const list = []
    const asyncIncrement = async () => {
        const res = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(100)
            }, 1000)
        })
    }
    // 返回数据和方法
    return {
        count,
        increment,
        decrement,
        doubleCount
    }
})