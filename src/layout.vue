<template>
    <div class="g-layout">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluLayout'
}
</script>
<style lang="scss" scoped>
.g-layout{
    display: flex;
    flex-direction: column;
}
</style>