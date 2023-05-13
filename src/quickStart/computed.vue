<script setup>
import {computed, ref} from "vue";

  const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const computedList = computed(() => {
      return list.value.filter(item => item % 2 === 0)
  })

</script>

<template>
  <div>
      原始列表：{{ list }}
      <br>
      计算列表：{{ computedList }}
  </div>
</template>

<style scoped>

</style>