<script>
export default {
    data() {
        return {
            isActive: true,
            error: false
        }
    }
}
</script>

<template>
    <div :class="{ active: isActive, 'text-danger': error }"></div>

</template>

<style>
.text-danger {
    color: red;
}

.active {
    font-weight: bold;
}

</style>