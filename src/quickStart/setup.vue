<!--<script>-->
<!--  export default {-->
<!--      setup() {-->
<!--          console.log('setup')-->
<!--          const message = 'Hello World'-->
<!--          const logMessage = () => {-->
<!--              console.log(message)-->
<!--          }-->
<!--          return {-->
<!--              message,-->
<!--              logMessage-->
<!--          }-->
<!--      },-->
<!--      beforeCreate() {-->
<!--          console.log('beforeCreate')-->
<!--      }-->
<!--  }-->
<!--</script>-->

<!--  setup语法糖优化-->
<script setup>
    console.log('setup')
    const message = 'Hello World'
    const logMessage = () => {
        console.log(message)
    }
</script>

<template>
  <div>
      {{ message }}
      <button @click="logMessage">Log Message</button>
  </div>
</template>

<style scoped>

</style>