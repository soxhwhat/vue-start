<script>
export default {
    data() {
        return {
            msg: 'Hello Vue 3 + Vite',
            counter : {
                count : 0
            }
        }
    }

}
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>Count is : {{ counter.count }}</p>
    <h1>{{ message.split('').reverse().join('') }}</h1>
</template>

<style scoped>

</style>