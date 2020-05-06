<template>
    <div class="d-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'DarkContent'
}
</script>
<style lang="scss" scoped>
.d-content{
    flex-grow: 1;
}
</style>